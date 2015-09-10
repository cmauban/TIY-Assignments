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
