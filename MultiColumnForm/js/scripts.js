
//1.) Make variables for all of the elements I will be manipulating
//    a. start with the form element and one type with in
//    b. make variable for one of each type of form elements
//    c. make them all!
//

//create NodeList for 3 div columns:
var targetForm = document.getElementsByClassName('.cbp-mc-form');
var targetDiv = document.querySelectorAll('targetForm, div.cbp-mc-column');
console.log(targetDiv);

//create NodeList for all the id attributes in the input element:
var inputIds = document.querySelectorAll('input');
console.log(inputIds);

function data (){
  for (var i = 0; i < inputIds.length; i++){
    inputIds.addEventListener('input', data);
    console.log(inputIds.value);
  }
}


// var firstName = document.getElementById('first_name');
// var lastName = document.getElementById('last_name');
// var email = document.getElemetById('email');
//
// function data (){
//   console.log(firstName.value);
// }
//
// firstName.addEventListener('input', data);
// lastName.addEventListener('input', data);




// 2.) Make functions for every(maybe) form element.
//    a. make a function that will console.log for the form
//    b. make a function for one
//    c. then make function for one of each type of form element
//    d. then make them all! muwahahaha
//
//preventDefault(); -to prevent the form from being sent. stored in var input

//
// 3.) Make eventListeners
//    a. make eventListener for form
//    b. make eventListeners as needed
