var inputElements = $('input, select, textarea');

var submitForm = $('row-button');

submitForm.on('click', function(event){
  inputElements.each(function() {
  var output = inputElements.val();
  console.log(output);
  });
});

event.preventDefault();



// $('first_name').blur(function() {
//  console.log($('first_name').val());
// });
