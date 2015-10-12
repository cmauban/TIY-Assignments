
$('.tabs').each(function(){
  $('.tabContent').each(function(){

  $('a').on('click', function(){
    event.preventDefault(); //stop browser to take action for clicked


    $(this).toggleClass('active').siblings().removeClass('active');

    var active = $(this).attr('href'); //targets active tab

    $(active).toggleClass('active').siblings().removeClass('active');


    });
  });
});
