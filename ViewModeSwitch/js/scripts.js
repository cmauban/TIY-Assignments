var gridView = $('.cbp-vm-icon.cbp-vm-grid');
var listView = $('.cbp-vm-icon.cbp-vm-list');

$(gridView).on('click', function() {
    $('.cbp-vm-switcher').addClass('cbp-vm-view-grid');
    $('.cbp-vm-switcher.cbp-vm-view-list').removeClass('cbp-vm-view-list');
    $('gridView').addClass('cbp-vm-selected');
    $('listView').removeClass('cbp-vm-selected');

});

$(listView).on('click', function() {
    $('.cbp-vm-switcher').addClass('cbp-vm-view-list');
    $('.cbp-vm-switcher.cbp-vm-view-grid').removeClass('cbp-vm-view-grid');
    $('listView').addClass('cbp-vm-selected');
    $('gridView').removeClass('cbp-vm-selected');

});





// var gridView = $('a.cbp-vm-icon.cbp-vm-grid');
// var listView = $('a.cbp-vm-icon.cbp-vm-list');
//
// $('#cbp-vm').on('click', function() {
//   if ($(this).hasClass('cbp-vm-switcher.cbp-vm-view-grid')) {
//       $('.cbp-vm-switcher.cbp-vm-view-list').removeClass('cbp-vm-view-list').addClass('cbp-vm-view-grid');
//       $('gridView').addClass('cbp-vm-selected');
//       $('listView').hasClass('cbp-vm-icon.cbp-vm-list');
//   }
//   else if ($(this).hasClass('cbp-vm-switcher.cbp-vm-view-list')) {
//       $('.cbp-vm-switcher.cbp-vm-view-grid').removeClass('cbp-vm-view-grid').addClass('cbp-vm-view-list');
//       $('listView').addClass('cbp-vm-selected');
//       $('gridView').hasClass('cbp-vm-icon.cbp-vm-grid');
//   }
//
// });





//VANILLA JAVASCRIPT

// //1. CREATE THE VARIABLES FOR ALL OF THE ELEMENTS TO USE:
// var targetDiv = document.getElementById('cbp-vm'); //targeting parent of the div elements
// console.log(targetDiv);
//
// //BUTTONS
// var gridView = document.querySelector('a.cbp-vm-icon.cbp-vm-grid'); //captures href (buttons)
// var listView = document.querySelector('a.cbp-vm-icon.cbp-vm-list'); //^^class attribute in the anchor element
//
// // capture href, add an event listener, and add a class - for grid (buttons)
// // when grid button is selected, add 'cbp-vm-selected' to className "cbp-vm-icon cbp-vm-grid"
// // and delete 'cbp-vm-selected' from className "cbp-vm-icon cbp-vm-list cbp-vm-selected" (list)
//
// function clickGrid (event){ //`event` is the identifier
//   targetDiv.className = 'cbp-vm-switcher cbp-vm-view-grid';
//   gridView.className = 'cbp-vm-icon cbp-vm-grid cbp-vm-selected';
//   listView.className = 'cbp-vm-icon cbp-vm-list';
// }
//
// gridView.addEventListener('click', clickGrid); //when the gridButton is clicked..
//
//
// function clickList (event){
//   targetDiv.className = 'cbp-vm-switcher cbp-vm-view-list';
//   gridView.className = 'cbp-vm-icon cbp-vm-grid';
//   listView.className = 'cbp-vm-icon cbp-vm-list cbp-vm-selected';
// }
//
// listView.addEventListener('click', clickList); //when the listButton is clicked..
