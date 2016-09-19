(function () {
  "use strict";

  let expect = chai.expect

  describe("Pig Latin", function () {

    it("Receive a string as input", function () {
      let pigLatin = new PigLatin("hello")
      expect(pigLatin.getPhrase()).to.be.a("string")
    })

    it("The string can be a list of words separated by spaces or hyphens", function () {
      let pigLatin = new PigLatin("hello world")
      expect(pigLatin.hasSpacesOrHyphens()).to.not.be.false
      pigLatin.setPhrase("hello-world")
      expect(pigLatin.hasSpacesOrHyphens()).to.not.be.false
    })

    it("The string can be reset without re-initializing", function () {
      let pigLatin = new PigLatin("hello world")
      expect(pigLatin.setPhrase).to.exist
      pigLatin.setPhrase("good bye world")
      expect(pigLatin.getPhrase()).to.equal("good bye world")
    })
    
    describe("Translator", function () {
      let englishToPig
      
      beforeEach(function () {
        englishToPig = new PigLatin()
      })
       
      it("Translates empty string to null", function () {
        expect(englishToPig.toPigLatin()).to.be.null
      })

      it("Supports any number of words in the phrase", function () {
        englishToPig.setPhrase("hello-world")
        expect(englishToPig.toPigLatin()).to.equal("ellohay-orldway")
      })

      it("Supports capital letters", function () {
        englishToPig.setPhrase("Andrew")
        expect(englishToPig.toPigLatin()).to.equal("Andreway")
      })

      it("Retain punctuation", function () {
        englishToPig.setPhrase("Oh my god!")
        expect(englishToPig.toPigLatin()).to.equal("Ohay myay odgay!")
      })
    
      it("Retain spaces and hyphen in their place", function () {
          englishToPig.setPhrase("More than one-third of registered voters oppose the measure.")
          expect(englishToPig.toPigLatin()).to.equal("Oremay anthay oneyay-irdthay ofay egisteredray otersvay opposeyay ethay easuremay.")
      })

      describe("Translate words that start with vowels", function () {
        it("Appending 'ay' to the word if it ends in a consonant", function () {
          englishToPig.setPhrase("ask")
          expect(englishToPig.toPigLatin()).to.equal("askay")
        })
        it("Appending 'yay' to the word if it ends with vowel", function () {
          englishToPig.setPhrase("apple")
          expect(englishToPig.toPigLatin()).to.equal("appleyay")
        })
        it("Appending 'nay' to the word if it ends with 'y'", function () {
          englishToPig.setPhrase("any")
          expect(englishToPig.toPigLatin()).to.equal("anynay")
        })
      })

      describe("Translate words that start with a single consonant", function() {
        it("Removing the starting consonant, adding it at the end and appeding 'ay' to the end",
          function () {
            englishToPig.setPhrase("hello")
            expect(englishToPig.toPigLatin()).to.equal("ellohay")
          })
      })

      describe("Translate words that start with multiple consonants", function () {
        it("Removing all consonants at the front of the word, adding them  and 'ay' at the end",
          function () {
            englishToPig.setPhrase("known"),
            expect(englishToPig.toPigLatin()).to.equal("ownknay")
          })
      })
    })  
  })
})()
