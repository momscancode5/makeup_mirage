'use strict';

function ready(handler) {
	if (/complete|loaded|interactive/.test(document.readyState) && document.body) {
		handler();
	} else {
		document.addEventListener('DOMContentLoaded', handler, false);
	}
}

// ready(function () {
// 	bulmaCollapsible.attach();
// });

function waitForIt(callback, seconds) {
	return window.setTimeout(callback, seconds * 1000);
};

// Hack to let firebase DOM exist before running bulmaCollapsible.attach
// Waits 1 second to make sure generated DOM exists
function doBulmaCollapseThings() {
	// console.log('Hi there');
	bulmaCollapsible.attach();
}
waitForIt(doBulmaCollapseThings, .4);
