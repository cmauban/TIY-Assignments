
function add(A, B){
  return A + B;
};
console.assert(add(0, 0), === 0);
console.assert(add(0, 1), === 1);
console.assert(add(0, 2), === 2);
console.assert(add(0, 3), === 3);
console.assert(add(0, 4), === 4);
console.assert(add(0, 5), === 5);
console.assert(add(0, 6), === 6);
console.assert(add(0, 7), === 7);
console.assert(add(0, 8), === 8);
console.assert(add(0, 9), === 9);

console.assert(add(1, 0), === 1);
console.assert(add(1, 1), === 2);
console.assert(add(1, 2), === 3);
console.assert(add(1, 3), === 4);
console.assert(add(1, 4), === 5);
console.assert(add(1, 5), === 6);
console.assert(add(1, 6), === 7);
console.assert(add(1, 7), === 8);
console.assert(add(1, 8), === 9);
console.assert(add(1, 9), === 10);

console.assert(add(2, 0), === 2);
console.assert(add(2, 1), === 3);
console.assert(add(2, 2), === 4);
console.assert(add(2, 3), === 5);
console.assert(add(2, 4), === 6);
console.assert(add(2, 5), === 7);
console.assert(add(2, 6), === 8);
console.assert(add(2, 7), === 9);
console.assert(add(2, 8), === 10);
console.assert(add(2, 9), === 11);

console.assert(add(3, 0), === 3);
console.assert(add(3, 1), === 4);
console.assert(add(3, 2), === 5);
console.assert(add(3, 3), === 6);
console.assert(add(3, 4), === 7);
console.assert(add(3, 5), === 8);
console.assert(add(3, 6), === 9);
console.assert(add(3, 7), === 10);
console.assert(add(3, 8), === 11);
console.assert(add(3, 9), === 12);

console.assert(add(4, 0), === 4);
console.assert(add(4, 1), === 5);
console.assert(add(4, 2), === 6);
console.assert(add(4, 3), === 7);
console.assert(add(4, 4), === 8);
console.assert(add(4, 5), === 9);
console.assert(add(4, 6), === 10);
console.assert(add(4, 7), === 11);
console.assert(add(4, 8), === 12);
console.assert(add(4, 9), === 13);

console.assert(add(5, 0), === 5);
console.assert(add(5, 1), === 6);
console.assert(add(5, 2), === 7);
console.assert(add(5, 3), === 8);
console.assert(add(5, 4), === 9);
console.assert(add(5, 5), === 10);
console.assert(add(5, 6), === 11);
console.assert(add(5, 7), === 12);
console.assert(add(5, 8), === 13);
console.assert(add(5, 9), === 14);




/**
 * @param {Number} A to add to B
 * @param {Number} B to add to A
 * @return {Number} sum of A and B
 */

 function minus(A, B){
   return A - B;
};
 console.assert(minus(0,0), === 0);
 console.assert(minus(0,1), === -1);
 console.assert(minus(0,2), === -2);
 console.assert(minus(0,3), === -3);
 console.assert(minus(0,4), === -4);
 console.assert(minus(0,5), === -5);
 console.assert(minus(0,6), === -6);
 console.assert(minus(0,7), === -7);
 console.assert(minus(0,8), === -8);
 console.assert(minus(0,9), === -9);

 console.assert(minus(1,0), === 1);
 console.assert(minus(1,1), === 0);
 console.assert(minus(1,2), === -1);
 console.assert(minus(1,3), === -2);
 console.assert(minus(1,4), === -3);
 console.assert(minus(1,5), === -4);
 console.assert(minus(1,6), === -5);
 console.assert(minus(1,7), === -6);
 console.assert(minus(1,8), === -7);
 console.assert(minus(1,9), === -8);

 console.assert(minus(2,0), === 2);
 console.assert(minus(2,1), === 1);
 console.assert(minus(2,2), === 0);
 console.assert(minus(2,3), === -1);
 console.assert(minus(2,4), === -2);
 console.assert(minus(2,5), === -3);
 console.assert(minus(2,6), === -4);
 console.assert(minus(2,7), === -5);
 console.assert(minus(2,8), === -6);
 console.assert(minus(2,9), === -7);

 console.assert(minus(3,0), === 3);
 console.assert(minus(3,1), === 2);
 console.assert(minus(3,2), === 1);
 console.assert(minus(3,3), === 0);
 console.assert(minus(3,4), === -1);
 console.assert(minus(3,5), === -2);
 console.assert(minus(3,6), === -3);
 console.assert(minus(3,7), === -4);
 console.assert(minus(3,8), === -5);
 console.assert(minus(3,9), === -6);

 console.assert(minus(4,0), === 4);
 console.assert(minus(4,1), === 3);
 console.assert(minus(4,2), === 2);
 console.assert(minus(4,3), === 1);
 console.assert(minus(4,4), === 0);
 console.assert(minus(4,5), === -1);
 console.assert(minus(4,6), === -2);
 console.assert(minus(4,7), === -3);
 console.assert(minus(4,8), === -4);
 console.assert(minus(4,9), === -5);

 console.assert(minus(5,0), === 5);
 console.assert(minus(5,1), === 4);
 console.assert(minus(5,2), === 3);
 console.assert(minus(5,3), === 2);
 console.assert(minus(5,4), === 1);
 console.assert(minus(5,5), === 0);
 console.assert(minus(5,6), === -1);
 console.assert(minus(5,7), === -2);
 console.assert(minus(5,8), === -3);
 console.assert(minus(5,9), === -4);

 function times(A, B){
   return A * B;
};
 console.assert(times(0,0), === 0);
 console.assert(times(0,1), === 0);
 console.assert(times(0,2), === 0);
 console.assert(times(0,3), === 0);
 console.assert(times(0,4), === 0);
 console.assert(times(0,5), === 0);
 console.assert(times(0,6), === 0);
 console.assert(times(0,7), === 0);
 console.assert(times(0,8), === 0);
 console.assert(times(0,9), === 0);

 console.assert(times(1,0), === 0);
 console.assert(times(1,1), === 1);
 console.assert(times(1,2), === 2);
 console.assert(times(1,3), === 3);
 console.assert(times(1,4), === 4);
 console.assert(times(1,5), === 5);
 console.assert(times(1,6), === 6);
 console.assert(times(1,7), === 7);
 console.assert(times(1,8), === 8);
 console.assert(times(1,9), === 9);

 console.assert(times(2,0), === 0);
 console.assert(times(2,1), === 2);
 console.assert(times(2,2), === 4);
 console.assert(times(2,3), === 6);
 console.assert(times(2,4), === 8);
 console.assert(times(2,5), === 10);
 console.assert(times(2,6), === 12);
 console.assert(times(2,7), === 14);
 console.assert(times(2,8), === 16);
 console.assert(times(2,9), === 18);

 console.assert(times(3,0), === 0);
 console.assert(times(3,1), === 3);
 console.assert(times(3,2), === 6);
 console.assert(times(3,3), === 9);
 console.assert(times(3,4), === 12);
 console.assert(times(3,5), === 15);
 console.assert(times(3,6), === 18);
 console.assert(times(3,7), === 21);
 console.assert(times(3,8), === 24);
 console.assert(times(3,9), === 27);

 console.assert(times(4,0), === 0);
 console.assert(times(4,1), === 4);
 console.assert(times(4,2), === 8);
 console.assert(times(4,3), === 12);
 console.assert(times(4,4), === 16);
 console.assert(times(4,5), === 20);
 console.assert(times(4,6), === 24);
 console.assert(times(4,7), === 28);
 console.assert(times(4,8), === 32);
 console.assert(times(4,9), === 36);

 console.assert(times(5,0), === 0);
 console.assert(times(5,1), === 5);
 console.assert(times(5,2), === 10);
 console.assert(times(5,3), === 15);
 console.assert(times(5,4), === 20);
 console.assert(times(5,5), === 25);
 console.assert(times(5,6), === 30);
 console.assert(times(5,7), === 35);
 console.assert(times(5,8), === 40);
 console.assert(times(5,9), === 45);

 function divide (A, B){
   return A / B;
};
 console.assert(divide(0,0), === 0);
 console.assert(divide(0,1), === 0);
 console.assert(divide(0,2), === 0);
 console.assert(divide(0,3), === 0);
 console.assert(divide(0,4), === 0);
 console.assert(divide(0,5), === 0);
 console.assert(divide(0,6), === 0);
 console.assert(divide(0,7), === 0);
 console.assert(divide(0,8), === 0);
 console.assert(divide(0,9), === 0);

 console.assert(divide(1,0), === 1);
 console.assert(divide(1,1), === 1);
 console.assert(divide(1,2), === .5);
 console.assert(divide(1,3), === .6666);
 console.assert(divide(1,4), === .25);
 console.assert(divide(1,5), === .2);
 console.assert(divide(1,6), === .16667);
 console.assert(divide(1,7), === .1428);
 console.assert(divide(1,8), === .125);
 console.assert(divide(1,9), === .1111);
