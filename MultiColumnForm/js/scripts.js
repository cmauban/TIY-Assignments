
//**********1.) Make variables for all of the elements to manipulate

// var firstName = document.getElementById('first_name');
// var lastName = document.getElementById('last_name');
// var email = document.getElemetById('email');

//create NodeList for all the id attributes in the input/select/textarea elements:
var inputIds = document.querySelectorAll('input, select, textarea');
console.log(inputIds);

//create variable for submit button/element
var submitForm = document.querySelector('.cbp-mc-submit');

//add the event listener 'click' to the submit button.
submitForm.addEventListener('click', function(event){
  for (var i = 0; i < inputIds.length; i++){ //loops through NodeList
  var output = inputIds[i].value; //adds the text input to each item in the NodeList
    console.log(output);

  }
  event.preventDefault(); //prevents page from refeshing after pressing submit. (stored)
});



// *******2.) Make functions for every form element.

// function data (){
//   console.log(firstName.value);
//
//preventDefault(); -to prevent the form from being sent. stored in var input

//
// *********3.) Make eventListeners

// firstName.addEventListener('input', data);
// lastName.addEventListener('input', data);
