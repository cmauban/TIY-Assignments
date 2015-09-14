// there are two options to view the page layout: grid and list.
// we are not able to view the list layout even though the button
// is still there.
//
// the interactive elements:
// the buttons
// the view layout
//
// toggling over the view layout icons will change the icon from
// light grey to blue when pressed. The file still toggles to blue,
// but it does not change the view layout.
//
// in the DOM, we are missing the class "cbp-vm-selected" in
// the href attribute. (which would specify the URL of the page
// the link goes to)
// I think including this would allow us to select the list?
//
// TO FIX:
// establish a connection between JavaScript and HTML to make the
// website come alive. ex: linking the js file in the .html file.
// adding script tags.
//
// we need the js to connect the class by using getElementsByClassName
//
// we need a view class element to see the list layout.
//
// create a function for the view mode with loops
//
// use the window object to change orientation in the browser?
//
// execute two different loops: grid and list???

//1. CREATE THE VARIABLES FOR ALL OF THE ELEMENTS TO USE:
var targetDiv = document.getElementById('cbp-vm'); //targeting parent of the div elements
console.log(targetDiv);

//BUTTONS
var gridView = document.querySelector('a.cbp-vm-icon.cbp-vm-grid'); //captures href (buttons)
var listView = document.querySelector('a.cbp-vm-icon.cbp-vm-list'); //^^class attribute in the anchor element

// capture href, add an event listener, and add a class - for grid (buttons)
// when grid button is selected, add 'cbp-vm-selected' to className "cbp-vm-icon cbp-vm-grid"
// and delete 'cbp-vm-selected' from className "cbp-vm-icon cbp-vm-list cbp-vm-selected" (list)

function clickGrid (event){ //`event` is the identifier
  targetDiv.className = 'cbp-vm-switcher cbp-vm-view-grid';
  gridView.className = 'cbp-vm-icon cbp-vm-grid cbp-vm-selected';
  listView.className = 'cbp-vm-icon cbp-vm-list';
}

gridView.addEventListener('click', clickGrid); //when the gridButton is clicked..

// capture href, add an event listener, and add a class - for list (buttons)
// when list button is selected, add 'cbp-vm-selected' to className "cbp-vm-icon cbp-vm-list"
// and delete 'cbp-vm-selected' from className "cbp-vm-icon cbp-vm-grid cbp-vm-selected" (grid)
//
//    listView.addEventListener('click', function(){
//     listView.className += ' cbp-vm-selected';
//     console.log("TRACER BULLET!!!");
//
//  });

function clickList (event){
  targetDiv.className = 'cbp-vm-switcher cbp-vm-view-list';
  gridView.className = 'cbp-vm-icon cbp-vm-grid';
  listView.className = 'cbp-vm-icon cbp-vm-list cbp-vm-selected';
}

listView.addEventListener('click', clickList); //when the listButton is clicked..


// sad... because I thought this was gonna work -_-
//SWITCH VIEWS IN ELEMENT HREF
//
// document.addEventListener( "click", function(){ //add an event method and assigns the event type, 'click' to it.
//   document.removeEventListener( "click", listView.callee, false); //
//
//   switch(page){
//     case gridView:
//       document.getElementsByClassName('cbp-vm-icon cbp-vm-grid').className += ' cbp-vm-selected';
//       document.getElementsByClassName('cbp-vm-switcher').className += ' cbp-vm-view-grid';
//       break;
//     case listView:
//       document.getElementsByClassName('cbp-vm-icon cbp-vm-list').className += ' cbp-vm-selected';
//       document.getElementsByClassName('cbp-vm-switcher').className += ' cbp-vm-view-list';
//       break;
//   }
//
// }, false );
//
// console.log(page);
