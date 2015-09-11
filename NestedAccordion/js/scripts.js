// the interactive elements:
// blue words have the UI accordion drop down with more information.
// the arrows are light grey until you hoover over them.
//
// when i click on a heading, the text below hides and shows.
// - a class attribute in the list element for the headers is missing now.
// - when i click a heading with no text visible (closed accordion):
//    - the '<li>' that contains the heading I clicked turns into '<li class="cbp-ntopen">'
// - when i click a heading with text visible (open accordion):
//    - the '<li class="cbp-ntopen">' that contains the heading I clicked turns into '<li>'
// I think this is what made all the headers of Nested Accordion interactive?

// what does it do?
// when i click
//      on a heading...
// var heading = document.querySelector('.cbp-nttrigger');
//
// heading.addEventListener('click', function(){ //controller code
//   // the text below hides and shows...
//   // add the right class "ntopen" (something or other) to the right element... ?
//   document.querySelector("li").className = "cbp-ntopen";
//
// });
//
// //To get the other content sections to close, we need to create a variable for
// //the current target
// var openacc = document.querySelector("li").className = "cbp-ntopen";
//
// heading.addEventListener('click', function(){ //create new function
// document.querySelector("li").className = " "; //closes the accordion
// });

// //opens and closes
// //when i click on a heading..
// //create variable to target the class headings
// var heading = document.querySelector('.cbp-nttrigger');
// //the addEventListener listens to the event type 'click' and creates function
// heading.addEventListener('click', function(){ //controller code
//   //the method quertySelector selects first element <li>
//   if (document.querySelector("li").className !== "cbp-ntopen"){ //allows it to be closed first by not equaling the class attribute.
//     document.querySelector("li").className = "cbp-ntopen"; //..then opens by assigning the class attribute "ntopen"
//   return true; //opens accordion
// } //className is open already, then closed.
//   if (document.querySelector("li").className === "cbp-ntopen"){ //if className is strictly equal to class attribute "ntopen"
//     document.querySelector("li").className = ""; //..then the event type "click" changes the class attritue to null.
//   return true; //closes accordion
// }
// }); //END OPEN AND CLOSE



// //open and closes ALL top-headers
// //first use the parent class, <ul> for all the heading
// var heading = document.querySelectorAll('h3.cbp-nttrigger'); //stores NodeList of h3 in array
//
// for (var i = 0; i < heading.length; i++) { //loops through each item
//   heading[i].addEventListener('click', function(){ // putting in array. change value of class attribute
// // for each element in the NodeList, the value of the class attribute is changed to closed.
//   var openacc = document.querySelectorAll('li.cbp-ntopen');
//   if (openacc.length > 0) { //if it contains items
//     for (var = 0; i < openacc.length; i++) {
//       openacc[i].className = " ";
//   }
//
// } else {
//     document.querySelectorAll("li").className = "cbp-ntopen"
//
//   }
// })
// }; //END FOR LOOP







var heading = document.querySelectorAll('h3.cbp-nittrigger'); //store NodeList in array
var liheading = document.querySelectorAll('li.cbp-ntopen');


heading[i].addEventListener('click', function(){
  for (var i = 0; i < heading.length; i++) {
  if (document.querySelector("h3").className === "cbp-nittrigger"){
    document.querySelector("h3").className = "cbp-nittrigger";
  return true;
}


  }


}
  // heading[i].className = ""; // putting in array. change value of class attribute
 // for each element in the NodeList, the value of the class attribute is changed to closed.

  } //END FOR LOOP

}); //END FUNCTION








// you can just wrap both main groups in a div with class="accordion-div" and
// then you get the nested accordions as you expect.


//
// *****To get the other content sections to close, we need to create a variable for
// the current target and add an if statement and find .content with class of active
// and remove or toggle that class





//
// also, in the HTML there is not a div element with an id attribute
//that included style anymore. the script tags.
//
// I didn't notice any HTML created in the JavaScript-less file.
// the original file is index.js, vs. index.html

// TO FIX:
// establish a connection between JavaScript and HTML to make the
// website come alive. ex: linking the js file in the .html file.
// adding script tags.
//
// we need the js to connect the class by using getElementsByClassName
// to get the drop down information. (need to add a class attribute to the
// list element)
//
// we need an onclickeventhandler or onmouseover event for when the
// mouse moves over an element (arrow and header)
//
// create a function for the accordion.

// use the Document method querySelectorAll to return the list of
// all of the div elements.
