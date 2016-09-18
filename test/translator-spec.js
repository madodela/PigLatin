(function () {
  'use strict';

  let expect = chai.expect

  describe('Translator', function () {
    it('Translates empty string to null', function () {
      let translate = new Translator("")
      expect(translate.toPigLatin()).to.be.null
    })
  })
})()
