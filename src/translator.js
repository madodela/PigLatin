function Translator(englishPhrase = new PigLatin()) {
  const vowels = /[aeiou]/i,
    alphabet = /[b-z]/i,
    _englishPhrase = englishPhrase.getPhrase()

  this.toPigLatin = function () {
    if (!_englishPhrase) {
      return null;
    }

    if(englishPhrase.hasSpacesOrHyphens()) {
      let words = _englishPhrase.split(/\s|\-/),
        pigLatinWords = [],
        separator = _englishPhrase.indexOf('-') >= 0 ? "-": " "

      for(let i = 0, len = words.length; i < len; i++) {
        pigLatinWords.push(translate(words[i]))
      }
      return pigLatinWords.join(separator).trim();
    } else {
      return translate(_englishPhrase);
    }
  }

  function translate(word) {
    let firstLetter = word[0],
      lastLetter = word[word.length -1],
      isUpperCase = /[A-Z]/.test(firstLetter),
      punctuation = /[\.:,!;]/.test(lastLetter),
      sign = ''

      if(punctuation){
        sign = word.split("").pop()
        word = word.split("").splice(0, word.length -1)
        word = word.join("")
        lastLetter = word[word.length -1]
      }

    if (isVowel(firstLetter)) {
      if (isConsonant(lastLetter)) {
        word += 'ay'
      }
      if (isVowel(lastLetter)) {
        word += 'yay'
      }
      if (lastLetter === 'y') {
        word += 'nay'
      }
    }
    if (isConsonant(firstLetter)) {
      let wordArray = word.split(""),
        constantsTotal = word.indexOf(vowels.exec(word)),
        constants = constantsTotal >= 0 ? wordArray.slice(0, constantsTotal) : []
      wordArray.push(constants.join(""))
      wordArray.push('ay')
      wordArray.splice(0, constantsTotal)
      word = wordArray.join("");
    }
    if(isUpperCase) {
      word = word.toLowerCase()
      word = word[0].toUpperCase() + word.split("").splice(1, word.length)
      word = word.split(",").join("")
    }
    if(punctuation) {
      word += sign
    }
    return word
  }

  function isVowel (letter) {
      return vowels.test(letter)
  }
  function isConsonant (letter) {
    return alphabet.test(letter) && !vowels.test(letter) && letter !== 'y'
  }
}
