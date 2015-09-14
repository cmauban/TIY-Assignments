// the interactive elements:
// blue words have the UI accordion drop down with more information.
// the arrows are light grey until you hoover over them.
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

//
// when i click on a heading, the text below hides and shows.
// - a class attribute in the list element for the headers is missing now.
// - when i click a heading with no text visible (closed accordion):
//    - the '<li>' that contains the heading I clicked turns into '<li class="cbp-ntopen">'
// - when i click a heading with text visible (open accordion):
//    - the '<li class="cbp-ntopen">' that contains the heading I clicked turns into '<li>'
// I think this is what made all the headers of Nested Accordion interactive?

// JUST OPENS:
var heading = document.querySelector('.cbp-nttrigger');

heading.addEventListener('click', function(){ //controller code
  // the text below hides and shows...
  // add the right class "ntopen" (something or other) to the right element... ?
  document.querySelector("li").className = "cbp-ntopen";

});
//

// JUST CLOSES:
// //To get the other content sections to close, we need to create a variable for
// //the current target
var openacc = document.querySelector("li").className = "cbp-ntopen";

heading.addEventListener('click', function(){ //create new function
document.querySelector("li").className = " "; //closes the accordion
});


//OPENS AND CLOSES:
// //when i click on a heading..
// //create variable to target the class headings
var heading = document.querySelector('.cbp-nttrigger');
//the addEventListener listens to the event type 'click' and creates function
heading.addEventListener('click', function(){ //controller code
  //the method quertySelector selects first element <li>
  if (document.querySelector("li").className !== "cbp-ntopen"){ //allows it to be closed first by not equaling the class attribute.
    document.querySelector("li").className = "cbp-ntopen"; //..then opens by assigning the class attribute "ntopen"
  return true; //opens accordion
} //className is open already, then closed.
  if (document.querySelector("li").className === "cbp-ntopen"){ //if className is strictly equal to class attribute "ntopen"
    document.querySelector("li").className = ""; //..then the event type "click" changes the class attritue to null.
  return true; //closes accordion
}
}); //END OPEN AND CLOSE


// //OPEN AND CLOSE ALL TOP HEADERS AT SAME TIME:
// //first use the parent class, <ul> for all the heading
var headings = document.querySelectorAll('h3.cbp-nttrigger'); //stores NodeList of h3 in array

for (var i = 0; i < headings.length; i++) { //loops through each item, adding the event listener
  headings[i].addEventListener('click', function(){ // putting in array. change value of class attribute for each element in the NodeList, the value of the class attribute is changed to closed.
  for (var i = 0; i < headings.length; i++){ //when clicked, goes through each item
   var parent = headings[i].parentElement; //returns the <li> for each
     if(parent.className !== "cbp-ntopen" ){ //if it does NOT equal ntopen
       parent.className = "cbp-ntopen"; //assign it ntopen
   } else {
       parent.className = null; //or, return empty string
     }
   }
 })
}

// OPENS AND CLOSES ALL HEADINGS INDIVIDUALLY
var headings = document.querySelectorAll('h3.cbp-nttrigger'); //creates NodeList
console.log(headings);

for (var i = 0; i < headings.length; i++){ //loops through each item, adding the event listener 'click'
  headings[i].addEventListener('click', function(){
    var parent = this.parentElement; // returns parent element for what is clicked on
    if (parent.className !== "cbp-ntopen"){ //if it does NOT equal ntopen
      parent.className = "cbp-ntopen"; //assign it to open
    } else {
      parent.className = null; //or, return null.
    }
  });
}
