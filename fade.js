$(window).scroll(function() {

    if ($(this).scrollTop()>0)
     {
        $('.fade1').fadeOut(700);
        $('.fade2').fadeOut(1200);
        $('.fade3').fadeOut(1400);
        $('.fade4').fadeOut(1401);
        $('.fade4').fadeIn(14000);

     }
    else
     {
      $('.fade3').fadeIn();
      $('.fade2').fadeIn();
      $('.fade1').fadeIn();
      $('.fade4').fadeOut();

   }
 });


