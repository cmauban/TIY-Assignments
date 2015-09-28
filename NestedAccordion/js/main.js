$('section').hide(); //hides entire section element at first.


$('h3').on('click', function() {
  if ($(this).next().is(':hidden')) { //if the next tag(section) after the current element (h3) is hidden....(:hidden is a visibility filter)
      $(this).next().show(); //.. show section
      $('h4 ~ p').hide(); // and hide the p elements in h4 (previous ~ siblings. sibling selector will select any el that are a sibling of the previous element)
  } else {
     $(this).next().hide();
  }
});


$('h4').on('click', function() { //opens and closes subaccordions
  if ($(this).next().is(':hidden')) {
      $(this).next().show();
  } else {
     $(this).next().hide();
  }
});
