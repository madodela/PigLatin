let expect = chai.expect

describe('Pig Latin', function () {

  it('should receive a string as input', function () {
    let pigLatin = new PigLatin('hello')
      expect(pigLatin.getPhrase()).to.be.a('string')
  })
})
