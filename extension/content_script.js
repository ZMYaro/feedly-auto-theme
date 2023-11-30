'use strict';

var DARK_THEME_CLASS = 'theme--dark',
	LIGHT_THEME_CLASS = 'theme--light';

function setOverrideTheme() {
	// Add the `theme--dark` or `theme--light` class to the <body>.
	if (window.matchMedia('(prefers-color-scheme: dark)').matches && !document.body.classList.contains(DARK_THEME_CLASS)) {
		document.body.classList.add(DARK_THEME_CLASS);
		document.body.classList.remove(LIGHT_THEME_CLASS);
		return;
	} else if (window.matchMedia('(prefers-color-scheme: light)').matches && !document.body.classList.contains(LIGHT_THEME_CLASS)) {
		document.body.classList.add(LIGHT_THEME_CLASS);
		document.body.classList.remove(DARK_THEME_CLASS);
		return;
	}
	// If `prefers-color-scheme` matches neither, do nothing.
}

// Set to the system theme at load time.
setOverrideTheme();

// Update the theme if the user's system theme preference changes.
window.matchMedia('(prefers-color-scheme: dark)').addListener(setOverrideTheme);
window.matchMedia('(prefers-color-scheme: light)').addListener(setOverrideTheme);

// Set the theme again if Feedly changes it.
var observer = new MutationObserver(setOverrideTheme);
observer.observe(document.body, {
	attributes: true,
	attributeFilter: ['class']
});
