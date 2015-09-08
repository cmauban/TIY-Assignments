var expect = require ("chai").expect;

it('should totally fail', function(){
  expect().to.be.true;
});

/**
  *rovarspraket:
  *given a phrase like "this is fun!"...
  *produce a roverspraket version:
    "tothohisos isos fofunon"

  We need a function: rovarspraket
  * It accepts 1 parameter, a String, called 'phrase'
  *it doubles every consonent and inserts an "o" between them.

  *it addition, we need a function named 'isVowel'
  *it accepts 1 parameter, a single character, called 'char'
  *it returns TRUE if 'char' is an English vowel
  *otherwise it returns false

  *finally, we need a function named 'doubler'
  *it accepts 1 param, a character called 'consonent'
  *it doubles 'consonent' and inserts an "o" in the middle.
  */

  it('should identify vowels'), function(){
    expect(true).to.be.true;
    expect(isVowel).to.be.a("function");
    expect(isVowel("a")).to.be.true;
    expect(isVowel(0)).to.be.false;
    expect(isVowel("e"))to.be.true;
  });

  function isVowel(char){
    if (char === "a"){
      return true;
    }
      return false;
    }




  }
