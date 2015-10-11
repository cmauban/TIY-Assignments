
$('.tabs').each(function(){
  $('.tabContent').each(function(){

  $('a').on('click', function(){
    event.preventDefault(); //stop browser to take action for clicked

    $(this).toggleClass('active');
    $(this).addClass('active').siblings().removeClass('active');
    $('.panel').toggleClass('active'); //toggles showing content on and off
    $('[#*="panel-"]').toggleClass('panel active');
    $(this).addClass('active').siblings().removeClass('active');

    $('.panel .active').show().siblings().hide();






    });
  });
});
