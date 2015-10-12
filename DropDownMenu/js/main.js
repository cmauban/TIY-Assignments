
$('.tabs').each(function(){ //iterates through each ahref
  $('.tabContent').each(function(){ //iterates through the corresponding content

  $('a').on('click', function(){
    event.preventDefault(); //stop browser to take action for clicked


    $(this).toggleClass('active').siblings().removeClass('active'); //current href clicked toggles active

    var active = $(this).attr('href'); //targets active tab that grabs href

    $(active).toggleClass('active').siblings().removeClass('active'); //activates the corresponding content


    });
  });
});
