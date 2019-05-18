$(document).ready(function() {

  var slides = $('.home-page .slides-desktop img');
  i = 0;

  function cycle() {
    slides.hide();
    slides.eq(i).fadeIn(800)
      .delay(5000)
      .fadeOut(400, cycle);

      i = ++i % slides.length; // increment i,
      //   and reset to 0 when it equals divs.length
  }

  // Execution
  cycle();

});
