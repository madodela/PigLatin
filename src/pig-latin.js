function PigLatin (_phrase = "") {

  this.getPhrase = function () {
    return _phrase
  }

  this.phraseHasSpaces = function () {
    return /\s/g.test(_phrase)
  }
}
