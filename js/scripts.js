$(document).ready(function() {

  var slides = $('.slides img').hide(),
    i = 0;

  (function cycle() {
    slides.eq(i).fadeIn(800)
      .delay(5000)
      .fadeOut(400, cycle);

      i = ++i % slides.length; // increment i,
      //   and reset to 0 when it equals divs.length
  })();

});
