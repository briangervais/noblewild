$(document).ready(function() {

  // FUNCTION: Check Scroll Position, add positioning classes
  function scrollCheck() {
    // TOP
    if($(window).scrollTop() === 0) {
      $('body').removeClass('not-top');
    }

    // NOT TOP
    else {
      $('body').addClass('not-top');
    }
  }

  // FUNCTION: Slick
  function slickSlider() {
    if ($('.slick-slider').length > 0) {
      $('.slick--home').slick({
        autoplay: true,
        arrows: false,
        fade: true,
        pauseOnHover: false,
        speed: 2000
      });

      $('.slick--about').slick({
        autoplay: true,
        fade: true,
        pauseOnHover: false,
        speed: 400
      });
    }
  }

  // On Scroll
  $(document).scroll(function() {
    scrollCheck();
  });

  // Execute
  slickSlider();

});
