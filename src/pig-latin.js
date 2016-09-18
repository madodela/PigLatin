function PigLatin (_phrase = "") {

  this.getPhrase = function () {
    return _phrase
  }

  this.setPhrase = function (phrase) {
    _phrase = phrase
  }

  this.phraseHasSpaces = function () {
    return /\s/g.test(_phrase)
  }
}
