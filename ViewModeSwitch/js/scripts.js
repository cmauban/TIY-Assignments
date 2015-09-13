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


var divVm = document.querySelector("div#cbp-vm");
var aGrid = document.querySelector('a.cbp-vm-icon.cbp-vm-grid');
var aList = document.querySelector('a.cbp-vm-icon.cbp-vm-list');

console.log (divVm);
console.log (aGrid);
console.log (aList);

function clickGrid (clickButton) {
 var curButton = clickButton.currentTarget;
 divVm.className = "cbp-vm-switcher cbp-vm-view-grid";
 curButton.className = "cbp-vm-icon cbp-vm-grid cbp-vm-selected";
 aList.className = "cbp-vm-icon cbp-vm-list";
}

function clickList (clickButton) {
 var curButton = clickButton.currentTarget;
 divVm.className = "cbp-vm-switcher cbp-vm-view-list";
 curButton.className = "cbp-vm-icon cbp-vm-list cbp-vm-selected";
 aGrid.className = "cbp-vm-icon cbp-vm-grid";
}

aGrid.addEventListener('click', clickGrid);
aList.addEventListener('click', clickList);




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

// var targetDiv = document.getElementById('.cbp-vm'); //targeting parent of the div elements
// var targetClass = document.querySelectorAll('div.cbp-vm-options, targetDiv.cbp-vm-switcher'); //targeting the A element tags. Creates NodeList
//
// var gridView = document.querySelectorAll('a.cbp-vm-grid');
// var listView = document.querySelectorAll('a.cbp-vm-list');
// //
// console.log(gridView);
//
// gridView.initEvent('click', true, true);




//
// listView.addEventListener('click', function (e){
//   if(listView.className !== 'cbp-vm-icon cbp-vm-list cbp-vm-selected'){
//     listView.className = 'cbp-vm-icon cbp-vm-list cbp-vm-selected';
//     return true;
//   }
//   if(targetClass.className !== 'cbp-vm-switcher cbp-vm-view-list');
//     targetClass.className = 'cbp-vm-switcher cbp-vm-view-list';
//     return true;
// });
// console.log(e);
//
// // listView.addEventListener('click', function(){
// //     listView.className += ' cbp-vm-selected';
// //     console.log("TRACER BULLET!!!");
// //
// // });





//SWITCH VIEWS IN ELEMENT HREF
// var page = window.location.href;
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
