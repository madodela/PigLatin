let expect = chai.expect

describe('Pig Latin', function () {

  it('Receive a string as input', function () {
    let pigLatin = new PigLatin('hello')
    expect(pigLatin.getPhrase()).to.be.a('string')
  })

  it('The string can be a list of words separated by spaces', function () {
    let pigLatin = new PigLatin('hello world')
    expect(pigLatin.phraseHasSpaces()).to.not.be.false
  })
})
