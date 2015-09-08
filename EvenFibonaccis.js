var test = require('mocha').it, //changed "text" to "test"
  expect = require('chai').expect; //removed the "s" in expect

  test('fibonacci', function(){
    expect(fibonacci[0]).to.deep.equal([ 0 ]);
    expect(fibonacci[1]).to.deep.equal([ 1 ]);
    expect(fibonacci[2]).to.deep.equal([ 1, 2 ]);
    expect(fibonacci[5]).to.deep.equal([1, 2, 3, 5 ]);
    // ...ad nauseum.
  }); // END test(fibonacci)



var fib = []; //initializing array

function fibonacci () {

  fib[0]= 0;
  fib[1] = 1;

  for (var i = 0; i <= 10; i++ ){

      fib[i] = fib[i-2] + fib[i-1];
      fib.push(i); //pushing values into an array
    }

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
