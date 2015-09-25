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

// gridView.addEventListener('click', clickGrid); //when the gridButton is clicked..
jquery('.cbp-vm-grid').on('click', function (){ //when the grid button is clicked..
  .addClass('cbp-vm-selected');
  .addClass('cbp-vm-view-grid');
  f.removeClass('cbp-vm-selected'); //from list view
});

function clickList (event){
  targetDiv.className = 'cbp-vm-switcher cbp-vm-view-list';
  gridView.className = 'cbp-vm-icon cbp-vm-grid';
  listView.className = 'cbp-vm-icon cbp-vm-list cbp-vm-selected';
}

listView.addEventListener('click', clickList); //when the listButton is clicked..
