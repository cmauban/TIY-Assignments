$('section').hide(); //hides entire section element at first.
$('section').on('click', function() { //sets an event listener on section so when a user clicks, it triggers an anonymous function...
  $(this).remove(); //..to remove that element from page
});


$('h3').on('click', function() {
  $('li').addClass('open');
});
