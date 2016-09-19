function PigLatin (_phrase = "") {
  
  const vowels = /[aeiou]/i,
      alphabet = /[b-z]/i

  this.getPhrase = function () {
    return _phrase
  }

  this.setPhrase = function (phrase) {
    _phrase = phrase
  }

  this.hasSpacesOrHyphens = function () {
    return /\s|\-/g.test(_phrase)
  }
  
  this.toPigLatin = function () {
    let _englishPhrase = this.getPhrase()
      if (!_englishPhrase) {
        return null;
      }

      if (this.hasSpacesOrHyphens()) {
        let words = _englishPhrase.match(/[^\s-]+-?/g),
          pigLatinWords = []

        words.forEach(word => {
          let pigLatinWord = translate(word)
          pigLatinWords.push(pigLatinWord)
          if (!pigLatinWord.includes('-')) {
              pigLatinWords.push(" ")
          }
        })

        return pigLatinWords.join("").trim();
      } else {
        return translate(_englishPhrase);
      }
    }
  
  function translate (word) {
    let firstLetter = word[0],
        lastLetter = word[word.length -1],
        isUpperCase = /[A-Z]/.test(firstLetter),
        punctuation = /\W+/.test(word),
        startSign = "",
        endSign = ""

    if (punctuation) {
      startSign = word.split(/\w/).shift()
      endSign = word.split(/\w/).pop()
      word = word.split("").slice(startSign.length, word.length - endSign.length)
      word = word.join("")
      lastLetter = word[word.length - endSign.length]
      firstLetter = word[0]
    }

    if (isVowel(firstLetter)) {
      if (isConsonant(lastLetter) && lastLetter !== 'y') {
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
    if (isUpperCase) {
      word = word.toLowerCase()
      word = word[0].toUpperCase() + word.split("").splice(1, word.length)
      word = word.split(",").join("")
    }
    if (punctuation) {
      word = startSign + word + endSign
    }
      return word
  }

  function isVowel (letter) {
    return vowels.test(letter)
  }
  function isConsonant (letter) {
    return alphabet.test(letter) && !vowels.test(letter)
  }
}
