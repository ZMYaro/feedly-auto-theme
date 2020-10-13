'use strict';

function setOverrideTheme() {
	// Add the `theme--dark` or `theme--light` class to the <body>.
	if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
		document.body.classList.add('theme--dark');
		document.body.classList.remove('theme--light');
		return;
	} else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
		document.body.classList.add('theme--light');
		document.body.classList.remove('theme--dark');
		return;
	}
	// If `prefers-color-scheme` matches neither, do nothing.
}

// Set listeners to update the theme if the user's system theme preference changes.
window.matchMedia('(prefers-color-scheme: dark)').addListener(setOverrideTheme);
window.matchMedia('(prefers-color-scheme: light)').addListener(setOverrideTheme);

// Set to the system theme at load time.
setOverrideTheme();
// Set it again after load in case Feedly changes it on load.
window.addEventListener('load', function () {
	setTimeout(setOverrideTheme, 10);
});
