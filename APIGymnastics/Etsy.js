// Put `items.json` in your `APIGymnastics` directory... (node_modules)
var items = require('items.json');
    test = require('mocha').it,
    expect = require('chai').expect;

// TODO: Setup mocha and chai...

test('this is the easy one', function(){
  expect(items).to.exist;
  expect(Array.isArray(items)).to.be.true; // What.

  expect(items.length).to.equal(25); // It's haunting me now...
}); // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray

function amount (items){
  var items = []; //creating an array called items.
  return items.length;
}

test('finding the average price', function(){
  // var yourAnswer = "start with `items`; use `Array` methods";
  var yourAnswer = 0;

  //to calc the average price, we need:
  //*each item's price
  var prices = [ ], item;

  function forEachItem(index, length){
    //for the first item in the list..
    item = items[0]; //taking the first object in the array of items

    expect(item).to.be.an('object');
    expect(item.price).to.be.a('number');
    // expect(item.price).to.be.equal(12);

    prices.push(item.price); //pushing price of item into array prices (side effect)

    // expect(prices).to.deep.equal([12]);
    expect(prices.length).to.equal(length);

  }

var index, length;// index = 0; length = 1;

for ( var index = 0; index < items.length; index++ ) {
  items = items[index];
  prices.push(item.price);
}

//OR more simple:

items.forEach(function(item, index, all)){ //the function will be invoked with item, index and all items in array
  forEachItem(index, index + 1);

});

forEachItem(0,1);
forEachItem(1,2);
forEachItem(2,3);
  {
    // //for the first item in the list..
    // item = items[0]; //taking the first object in the array of items
    //
    // expect(item).to.be.an('object');
    // expect(item.price).to.be.a('number');
    // // expect(item.price).to.be.equal(12);
    //
    // prices.push(item.price); //pushing price of item into array prices (side effect)
    //
    // // expect(prices).to.deep.equal([12]);
    // expect(prices.length).to.equal(length); //gone up by one
  }

forEachItem(1, 2);
// index = 1; length = 2;
// {
//   //for the second item in the items..
//   item = items[index]; //reassigned item
//
//   expect(item).to.be.an('object');
//   expect(item.price).to.be.a('number');
//   expect(item.price).to.be.equal();
//
//   prices.push(item.price);

  // expect(prices).to.deep.equal([20]);

  //*sum of all item's prices
  //*and total number of items

  //sum of all item prices / number of items

  expect(items.length).to.equal(length);
}


  expect(yourAnswer).to.be.closeTo(23.63, 0.01);
});

var items = []; //create an array with the prices from items.json

function average (items){

for (var i = 0, sum = 0; i < items.length; sum +=[i++]){ //adding the sum of the array
  price.push( items[i].price ); //pushing prices from items.json to items array
}
  return sum;
}


test('finding that perfect $15 item', function(){
  /**
   * @param {Array} items to search through
   * @return {Array} of `items` with `price` between `min` and `max` USD
   */


  function pricedBetween(items){
   var min = 14;
   var max = 18;

   for(i = 0; i < items.length; i++){
     items.push(i);
   }

    // var filtered = [10].filter( pricedBetween ); //filters price from items.json
}



  expect( pricedBetween(items, 14, 18) ).to.deep.equal([
    // Can you find their names _without_ code first?
  ]);
});

test('pond hopping', function(){
  expect( /* your answer */ ).to.deep.equal({
    name: "1970s Schlitz Malt Liquor Glass Beer Pitcher",
    price: 18.00
  });
});

test('just wood or _reclaimed_ wood?', function(){
  var actual = wooden(items); // Who defined `wooden`...? Oh.

  expect( actual ).to.deep.equal( /* an Array of String names... */ );
});

test('this is just SEO bait, I know it...', function(){
  var actual = octomatter(items); // Just one way to do it... Plus, "octomatter"!

  expect(actual).to.deep.equal(/* Look, I can't do _everything_ for you! */);
});

test('true craftsmen... women... people. Birds?', function(){
  expect(makerSellers(items)).to.equal(18);
});
