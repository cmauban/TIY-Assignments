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
// we are missing the <div> element with the id and style attributes
// at the end of the DOM. this will probably help the layout of the
// web page.
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
// execute two different loops: grid and list







//
// // capture href, add an event listener, and add a class - for grid (buttons)
// var grid = document.getElementsByClassName('.cbp-vm-grid');
//
// grid.addEventListener('click', function() {
//   // grid.className = 'cbp-vm-selected';
//   grid.className.replace ( /(?:^|\s)'cbp-vm-selected'(?!\S)/g , '' );
//
// });

//when grid button is selected, add 'cbp-vm-selected' to className "cbp-vm-icon cbp-vm-grid"
//and delete 'cbp-vm-selected' from className "cbp-vm-icon cbp-vm-list cbp-vm-selected" (list)







// IDENTIFY THE PAGE YOURE ON
// var page = window.location.href;
var targetDiv = document.getElementById('.cbp-vm');
var targetClass = document.querySelectorAll('div.cbp-vm-options, targetDiv.cbp-vm-switcher');

// getElementsByClassName('.cbp-vm-switcher.cbp-vm-view-grid')[1];
console.log(targetClass);

// var grid = targetClass.firstChild;
// var list = targetClass.lastChild;
//
// console.log(grid);
// console.log(list);
//
// list.addEventListener('click', function(){
//
// grid.className = 'cbp-vm-icon cbp-vm-grid cbp-vm-selected';
// list.className = 'cbp-vm-icon cbp-vm-list';
//
//   console.log(grid);
//   console.log(list);
//
// });



// document.addEventListener( "click", function(){ //add an event method and assigns the event type, 'click' to it.
//   document.removeEventListener( "click", listView.callee, false); //
//   switch(switcher) {
//     case gridView:
//       document.getElementsByClassName('cbp-vm-switcher').className += ' cbp-vm-view-grid';
//       break;
//     case listView:
//       document.getElementsByClassName('cbp-vm-switcher').className += ' cbp-vm-view-list';
//       break;
//   }
//
// }, false );
//
//


//SWITCH VIEWS IN ELEMENT HREF
// document.addEventListener( "click", function(){ //add an event method and assigns the event type, 'click' to it.
//   document.removeEventListener( "click", listView.callee, false); //
//
//   switch(page) {
//     case gridView:
//       document.getElementsByClassName('cbp-vm-icon cbp-vm-grid').className += ' cbp-vm-selected';
//       break;
//     case listView:
//       document.getElementsByClassName('cbp-vm-icon cbp-vm-list').className += ' cbp-vm-selected';
//       break;
//   }
//
// }, false );









//starting point to find its children
// var switcher = document.getElementById('cbp-vm');
//
// var grid = switcher.firstChild;
// var list = switcher.lastChild;
//
// console.log(grid);
// console.log(list);
//
// list.addEventListener('click', function(){
//
// grid.className = 'cbp-vm-icon cbp-vm-grid cbp-vm-selected';
// list.className = 'cbp-vm-icon cbp-vm-list';
//
//   console.log(grid);
//   console.log(list);
//
// });
//



// capture href, add an event listener, and add a class - for list (buttons)
// var list = document.getElementsByClassName('cbp-vm-list');
//
//   list.addEventListener('click', function(){
//     list.className += ' cbp-vm-selected';
//     console.log("TRACER BULLET!!!");
//
// });



//when list button is selected, add 'cbp-vm-selected' to className "cbp-vm-icon cbp-vm-list"
//and delete 'cbp-vm-selected' from className "cbp-vm-icon cbp-vm-grid cbp-vm-selected" (grid)









//figure out how to get the class unadded when the other is selected
// for the div.. toggle between view grid and view list classes
//      *if grid is selected, then the view grid class is added to div
//      *if list is selected, then view list class added to div
//      *when grid is added, list is removed
//      *when list is added, grid is removed

//1. give grid control flow - priority as default?
//2. when list is selected it gains priority (how?)
//3.
