(function () {
  'use strict';

  let expect = chai.expect

  describe('Translator', function () {
    it('Translates empty string to null', function () {
      let translate = new Translator("")
      expect(translate.toPigLatin()).to.be.null
    })

    describe('Translate words that start with vowels', function () {
      it('Append "ay" to the word if it ends in a consonant', function () {
        let translate = new Translator("ask")
        expect(translate.toPigLatin()).to.equal("askay")
      })
      it('Append "yay" to the word if it ends with vowel', function () {
        let translate = new Translator("apple")
        expect(translate.toPigLatin()).to.equal("appleyay")
      })
    })
  })
})()
