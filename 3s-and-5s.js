var test = require('mocha').it,
    expect = require('chai').expect, // Use `expect(X).to.be` et al
    assert = require('chai').assert;  // OR use `assert.equal` etc

test('three', function(){
  // assert.equal(sumofthrees).to.exist;
  // assert.equal(sumofthrees([3, 6, 9]), 18);
  // assert.equal(sumofthrees([3, 6, 9, 12, 15, 18]), 63);
  // assert.equal(sumofthrees([3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48]), 408);
  expect(three(10)).to.equal(18);
  expect(three(20)).to.equal(63);
  // expect(threes(50)).to.equal([3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48]);
}); // END test 3s

test('fives', function(){
  assert.equal(sumoffives).to.exist;
  assert.equal(sumoffives([5]), 5);
  assert.equal(sumoffives([5, 10, 15]), 30);
  assert.equal(sumoffives([5, 10, 15, 20, 25, 30, 35, 40, 45]), 225);
  // expect(fives(10)).to.equal([5])
  // expect(fives(20)).to.equal([5, 10, 15])
  // expect(fives(50)).to.equal([5, 10, 15, 20, 25, 30, 35, 40, 45])
}); // END test 5s

// function sumofthrees (A, B){
//   var array1 = [3, 6, 9], array2 = [3, 6, 9, 12, 15, 18],
//   array3 = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48];
//   array4 = [5], array5 = [5, 10, 15], array6= [5, 10, 15, 20, 25, 30, 35, 40, 45];
// for(var i = 0; i < array1.length; i++);
//   return sum;
// }

var three = [];
var five = [];
var fifteen = [];
var sumThree = 0;
var sumFive = 0;
var sumFifteen = 0;
var sumAll = sumThree + sumFive - sumFifteen;

function sumsofthrees (){
  for(var i = 0; i < 1000; i += 3){
    three.push(i); // var three = [array of multiples of 3]
  }
  for(var i = 0; i < 1000; i += 5){
    five.push(i); // var five = [array of multiples of 5]
  }
  for(var i = 0; i <1000; i += 15){
    fifteen.push(i); // var fifteen = [array of multiples of 15]
  }
  for (var x = 0; x < three.length; x++) { //looping length of array
    sumThree = (sumThree + three[i]); //adding loop of array together
  }
for (var x = 0; x < five.length; x++){
    sumFive = (sumFive + five[i]);
}
for (var x =0; x < fifteen.length; x++){
    sumFifteen = (sumFifteen + fifteen[i]);
}
if(sumAll === sumThree + sumFive - sumFifteen){
  return sumAll;
}
}
