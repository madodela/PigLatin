(function () {
  'use strict';

  let expect = chai.expect,
    englishPhrase

  beforeEach(function () {
    englishPhrase = new PigLatin()
  })
  describe('Translator', function () {
    it('Translates empty string to null', function () {
      let translate = new Translator(englishPhrase)
      expect(translate.toPigLatin()).to.be.null
    })

    it('Supports any number of words in the phrase', function () {
      englishPhrase.setPhrase('hello-world')
      let translate = new Translator(englishPhrase)
      expect(translate.toPigLatin()).to.equal('ellohay-orldway')
    })

    it('Supports capital letters', function () {
      englishPhrase.setPhrase('Andrew')
      let translate = new Translator(englishPhrase)
      expect(translate.toPigLatin()).to.equal('Andreway')
    })

    describe('Translate words that start with vowels', function () {
      it('Appending "ay" to the word if it ends in a consonant', function () {
        englishPhrase.setPhrase('ask')
        let translate = new Translator(englishPhrase)
        expect(translate.toPigLatin()).to.equal('askay')
      })
      it('Appending "yay" to the word if it ends with vowel', function () {
        let englishPhrase = new PigLatin('apple'),
        translate = new Translator(englishPhrase)
        expect(translate.toPigLatin()).to.equal('appleyay')
      })
      it('Appending "nay" to the word if it ends with "y"', function () {
        let englishPhrase = new PigLatin('any'),
        translate = new Translator(englishPhrase)
        expect(translate.toPigLatin()).to.equal('anynay')
      })
    })

    describe('Translate words that start with a single consonant', function() {
      it('Removing the starting consonant, adding it at the end and appeding "ay" to the end', function () {
        let englishPhrase = new PigLatin('hello'),
        translate = new Translator(englishPhrase)
        expect(translate.toPigLatin()).to.equal('ellohay')
      })
    })

    describe('Translate words that start with multiple consonants', function () {
      it('Removing all consonants at the front of the word, adding them  and "ay" at the end', function () {
        let englishPhrase = new PigLatin('known'),
        translate = new Translator(englishPhrase)
        expect(translate.toPigLatin()).to.equal('ownknay')
      })
    })
  })
})()
