function Translator(englishPhrase = "") {
  const vowels = /[aeiou]/,
    alphabet = /[b-z]/

  this.toPigLatin = function () {
    if (!englishPhrase) {
      return null;
    }

    let firstLetter = englishPhrase[0],
      lastLetter = englishPhrase[englishPhrase.length -1]

    if (isVowel(firstLetter)) {
      if (isConsonant(lastLetter)) {
        englishPhrase += 'ay'
      }
      if (isVowel(lastLetter)) {
        englishPhrase += 'yay'
      }
      if (lastLetter === 'y') {
        englishPhrase += 'nay'
      }
    }
    if (isConsonant(firstLetter)) {
      let wordArray = englishPhrase.split(""),
        constantsTotal = englishPhrase.indexOf(vowels.exec(englishPhrase)),
        constants = wordArray.slice(0, constantsTotal)
      wordArray.push(constants.join(""))
      wordArray.push('ay')
      wordArray.splice(0, constantsTotal)
      englishPhrase = wordArray.join("");
    }
    return englishPhrase;
  }

  function isVowel (letter) {
      return vowels.test(letter)
  }
  function isConsonant (letter) {
    return alphabet.test(letter) && !vowels.test(letter) && letter !== 'y'
  }
}
