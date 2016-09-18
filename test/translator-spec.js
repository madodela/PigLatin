(function () {
  'use strict';

  let expect = chai.expect

  describe('Translator', function () {
    it('Translates empty string to null', function () {
      let translate = new Translator("")
      expect(translate.toPigLatin()).to.be.null
    })

    describe('Translate words that start with vowels', function () {
      it('Appending "ay" to the word if it ends in a consonant', function () {
        let translate = new Translator("ask")
        expect(translate.toPigLatin()).to.equal("askay")
      })
      it('Appending "yay" to the word if it ends with vowel', function () {
        let translate = new Translator("apple")
        expect(translate.toPigLatin()).to.equal("appleyay")
      })
      it('Appending "nay" to the word if it ends with "y"', function () {
        let translate = new Translator("any")
        expect(translate.toPigLatin()).to.equal("anynay")
      })
    })

    describe('Translate words that start with a single consonant', function() {
      it('Will remove the starting consonant, add it at the end and will append "ay" to the end', function () {
        let translate = new Translator("hello")
        expect(translate.toPigLatin()).to.equal("ellohay")
      })
    })
  })
})()
