/**
 * The function `reverse` computes the reversal
 * of a given `String` (don't copy-pasta!)
 *str_rot13
 * @param {String} S to reverse
 * @return {String}
 */

function reverse(S){
  return S.split("").reverse().join(""); // splits the string, reverses it, and joins it back together.

    // YOUR CODE HERE: NO INTERNET COPY-PASTA!
}

console.assert(reverse("") === ""); // Really?

console.assert(reverse("A") === "A"); // Jerk.

console.assert(reverse("cat") === "tac");

console.assert(reverse("ward") === "draw");

console.assert(reverse("books") === "skoob"); // Rokey, dokey...

console.assert(
  reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew"
);

/**
 * Function `encode` accepts a `String` and produces
 * the appropriate ROT13 "encoded" version, i.e. every
 * character in `phrase` is "rotated" ahead by 13 characters.
 *
 * @see String.prototype.charCodeAt
 * @see String.prototype.fromCharCode
 * @see http://en.wikipedia.org/wiki/ROT13
 *
 * // Start with just `phrase`...
 * @param {String} phrase to encode
 * // Add `N` in part 2!
 * // @param {Number} N rotation to apply, default 13
 * @return {String} encoded with ROT13
 */

function encode (phrase, N){
  //var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var message = "";
  for (var i = 0; i < phrase.length; i++){ //loops the phrase
      var charc = phrase[i].charCodeAt(0); // gives it a code
      charc += 13; // adds 13 letters ahead
      if (charc > 122){
        message += String.fromCharCode((charc - 123) + 97); //to continue the loop
      } else {
      message += String.fromCharCode(charc);
    // // } for (var i = 0; i < phrase.length; i++){
    // //     var charc = phrase[i].charCodeAt(0);
    // //     charc += N
    // //     if (charc > 122){
    // //   message += String.fromCharCode((charc - 123) + 97);
    // } else {
    //   message += String.fromCharCode(charc);
  }
}
     return message;
  }




/**
 * Function `decode` accepts a `phrase` and `N` and
 * decoded it appropriately, i.e. every _word_ character
 * in `phrase` is rotated backward by `N` characters.
 *
 * @param {String} phrase to decode
 * @param {Number} N rotation to apply, default 13
 * @return {String} decoded by ROT-N
 */
function decode(phrase, N){
    var message = " ";
  for (var i = 0; i < phrase.length; i++) {
    var charc = phrase[i].charCodeAt(0);
    charc -= N;
      if (charc < 97){
        message += String.fromCharCode((charc - 123) + 97);
      }
      message += String.fromCharCode(charc);
    } return message;
}

// Produce more examples, please...
console.assert(encode("hello") === "uryyb");
console.assert(encode("uryyb") === "hello");
console.assert(encode("hello", 2) === "jgnnq");
console.assert(decode("jgnnq", 2) === "hello");
