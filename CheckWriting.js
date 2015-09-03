var test = require('mocha').it,
  assert = require('chai').assert;

test('toEnglish: `0` to `9`', function(){
  assert.isDefined(toEnglish);
  assert.isFunction(toEnglish);
  assert.equal(toEnglish(0), "zero");
  assert.equal(toEnglish(1), "one");
  assert.equal(toEnglish(2), "two");
  assert.equal(toEnglish(3), "three");
  assert.equal(toEnglish(4), "four");
  assert.equal(toEnglish(5), "five");
  assert.equal(toEnglish(6), "six");
  assert.equal(toEnglish(7), "seven");
  assert.equal(toEnglish(8), "eight");
  assert.equal(toEnglish(9), "nine");
  // et cetera, et cetera, et cetera...
}); // END test(toEnglish)


test('toEnglish: `10` to `20`', function(){
  assert.isDefined(toEnglish);
  assert.isFunction(toEnglish);
  assert.equal(toEnglish(10), "ten")
  assert.equal(toEnglish(11), "eleven")
  assert.equal(toEnglish(12), "twelve");
  assert.equal(toEnglish(13), "thirteen");
  assert.equal(toEnglish(14), "fourteen");
  assert.equal(toEnglish(15), "fifteen");
  assert.equal(toEnglish(16), "sixteen");
  assert.equal(toEnglish(17), "seventeen");
  assert.equal(toEnglish(18), "eighteen");
  assert.equal(toEnglish(19), "nineteen");
  assert.equal(toEnglish(20), "twenty");

}); // END test(toEnglish)

test('toEnglish: `21` to `30`', function(){
  assert.isDefined(toEnglish);
  assert.isFunction(toEnglish);
  assert.equal(toEnglish(21), "twenty-one")
  assert.equal(toEnglish(22), "twenty-two")
  assert.equal(toEnglish(23), "twenty-three");
  assert.equal(toEnglish(24), "twenty-four");
  assert.equal(toEnglish(25), "twenty-five");
  assert.equal(toEnglish(26), "twenty-six");
  assert.equal(toEnglish(27), "twenty-seven");
  assert.equal(toEnglish(28), "twenty-eight");
  assert.equal(toEnglish(29), "twenty-nine");
  assert.equal(toEnglish(30), "thirty");

}); // END test(toEnglish)

/**
 * @param {Number} value to convert to English number word
 * @return {String} representing `value` in English
 */
function toEnglish(x){
  if ( x == 0){
    return "zero";
  }
  if( x == 1){
    return "one";
  }
  if( x == 2){
    return "two";

  }
  if( x == 3){
    return "three";

  }
  if( x == 4){
    return "four";

  }
  if( x == 5){
    return "five";

  }
  if( x == 6){
    return "six";

  }
  if( x == 7){
    return "seven";

  }
  if( x == 8){
    return "eight";

  }
  if( x == 9){
    return "nine";

  }
  if( x == 10){
    return "ten";

  }
  if( x == 11){
    return "eleven";

  }
  if( x == 12){
    return "twelve";

  }
  if( x == 13){
    return "thirteen";

  }
  if( x == 14){
    return "fourteen";

  }
  if( x == 15){
    return "fifteen";

  }
  if( x == 16){
    return "sixteen";

  }
  if( x == 17){
    return "seventeen";

  }
  if( x == 18){
    return "eighteen";

  }
  if( x == 19){
    return "nineteen";

  }
  if( x == 20){
    return "twenty";

  }
  if( x == 21){
    return "twenty-one";

  }
  if( x == 22){
    return "twenty-two";

  }
  if( x == 23){
    return "twenty-three";

  }
  if( x == 24){
    return "twenty-four";

  }
  if( x == 25){
    return "twenty-five";

  }
  if( x == 26){
    return "twenty-six";

  }
  if( x == 27){
    return "twenty-seven";

  }
  if( x == 28){
    return "twenty-eight";

  }
  if( x == 29){
    return "twenty-nine";

  }
  if( x == 30){
    return "thirty";

  }
} // END toEnglish

test('BEAST MODE: toCheck', function(){
  assert.isFunction(toCheck);
  assert.equal(toCheck(1.23), "one & 23/100s");
  assert.equal(toCheck(12.34), "twelve & 34/100s");
  assert.equal(toCheck(123.45), "one hundred twenty three & 45/100s");
  assert.equal(toCheck(1234.56), "one thousand, two hundred thirty four & 56/100s");
  // you might need to try some values in between...
}); // END test(BEAST MODE)
