"use strict";

let englishToPig = new PigLatin();

function translateWord() {
	let english = document.getElementById("englishWord").value;
	englishToPig.setPhrase(english);
	document.getElementById("pigLatinWord").value = englishToPig.toPigLatin();
}