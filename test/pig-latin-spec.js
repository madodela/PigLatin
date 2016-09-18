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

  it('The string can be reset without re-initializing', function () {
    let pigLatin = new PigLatin('hello world')
    expect(pigLatin.setPhrase).to.exist
    pigLatin.setPhrase('good bye world')
    expect(pigLatin.getPhrase()).to.equal('good bye world')
  })
})
