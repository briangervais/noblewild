$(document).ready(function() {

  if ($('.slick-slider').length > 0) {
    $('.slick-slider').slick({
      autoplay: true,
      arrows: false,
      fade: true,
      pauseOnHover: false,
      speed: 2000
    });
  }


  $(document).scroll(function() {
    if($(window).scrollTop() === 0) {
      $('body').removeClass('not-top');
    }

    else {
      $('body').addClass('not-top');
    }
  });

});
