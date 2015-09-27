


//THIS ONE-----
$('#mcf-submit').submit(function (e) {
  e.preventDefault();
  var values = $(this).serialize();
  console.log(values);
});



// $('#mcf-submit').submit(function () {

  // $params = array();
  // parse_str($_POST, $params);
  // var values = $(this).serialize();
//   console.log(values);
// });

// SERIALIZE.....

// $('#mcf-submit').on('submit', function(e) {
//
//   e.preventDefault();
//   var inputElements = $('#mcf-submit').serialize();
//   $.post("mcf-submit.php", values, function(data) {
//     $('#mcf-submit').html(data);
//
//
// });
// $(function() {
//
//   var inputElements = $('input, select, textarea');
//   console.log(inputElements);
//
//   // var $submitForm = $('submit');
//   $('inputElements').each(function(event) {
//   var output = $('inputElements').val();
//
//   output.submit();
//     event.preventDefault();
//
//     console.log(output);
//   });




// }); //END FORM FUNCTION




// var inputElements = $('input, select, textarea');
// console.log(inputElements);
//
// // var $submitForm = $('submit');
// $('inputElements').each(function(event) {
// var output = $('inputElements').val();
//
// output.submit();
//   event.preventDefault();
//
//   console.log(output);
//
// });





// $('first_name').blur(function() {
//  console.log($('first_name').val());
// });
