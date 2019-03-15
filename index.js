function initFontSize() {
	var designWidth = 320;
	var clientWidth = (document.body ? Math.max(document.documentElement.clientWidth, document.body.clientWidth) : document.documentElement.clientWidth) || designWidth;
	if (clientWidth > 640) {
		clientWidth = 640;
	}
	document.documentElement.style.fontSize = Math.round(clientWidth * 16 / designWidth) + "px";
}
