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

// $( document ).ready(function() {
// 	bulmaCollapsible.attach();
// });

// const testElement = document.querySelector('article.message');
// console.log('test article.message', testElement.innerHTML);

$.wait = function( callback, seconds){
	return window.setTimeout( callback, seconds * 1000 );
};

// Hack to let firebase DOM exist before running bulmaCollapsible.attach
// Waits 1 second to make sure generated DOM exists
function doBulmaCollapseThings() {
	console.log('Hi there');
	// const testElement = document.querySelector('article.message');
	// console.log('test article.message', testElement.innerHTML);
	bulmaCollapsible.attach();
}
$.wait(doBulmaCollapseThings, 1);
