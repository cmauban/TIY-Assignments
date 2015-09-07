var text = require('mocha').it,
  expects = require('chai').expect;

test('generating the Fibonacci sequence', function(){
  expect(fibonacci[0]).to.deep.equal([0]);
  expect(fibonacci[1]).to.deep.equal([ 1 ]);
  expect(fibonacci[2]).to.deep.equal([ 1, 2 ]);
  expect(fibonacci[5]).to.deep.equal([1, 2, 3, 5 ]);
  // ...ad nauseum.
}); // END test(fibonacci)

var fib = [];
// Hey, where's `fibonacci`...? Uh oh...
function fibonacci (n) {


  var one = 1;
  var two = 2;
  var sum = 0;

  for (var i = 1; i < n; i++ ){
    if (i % 2 === 0) {
      sum += one;
      fib.push(i);
    }
    var three = one + two;
    one = two;
    two = three;

  }
   return three;

}


//   while(a < 4000000) {
//     if (a % 2 ===0){
//       sum += a;
//     }
//     var c = a + b;
//     a = b;
//     b = c;
//   }
// }

test('just even numbers?', function(){
  expect(evens([ 0 ])).to.deep.equal([ 0 ]);
  expect(evens([ 1 ])).to.deep.equal([ ]);
  expect(evens([ 1, 1, 1 ])).to.deep.equal([ ]);
  expect(evens([ 2 ])).to.deep.equal([ 2 ]);
  expect(evens([ 1, 2 ])).to.deep.equal([ 2 ]);
  // More tests, perhaps?
}); // END test(evens)



test('summing lists of Number', function(){
  assert.equal(sum([ ]), 0);
  assert.equal(sum([ 1 ]), 1);
  assert.equal(sum([ 1, 1 ]), 2);
  // ...et cetera, et cetera, et cetera.
}); // END test(sum)

// You expect me to write `sum`, too?

test('summing even Fibonacci numbers?', function(){
  expect( sum(evens(fibonacci(0))) ).to.equal(FILL_ME_IN); // nice.
  // There really should be more code in here...
}); // END test(dat CHAIN tho)
