var $ = require('jquery');

module.exports = (function() {

  var top = $('.main-header').height();
  $('body').hasClass('logged-in') ? top += 32 : top += 0;

  $('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('body').addClass('scrolling');
        $('.top-menu a').removeClass('active');
        $('.top-menu a[href="#' + target.attr('id') + '"]').addClass('active');
        $('html, body').animate({
          scrollTop: target.offset().top - top - 50
        }, 1000);
        setTimeout(function() { $('body').removeClass('scrolling'); }, 1000);
        return false;
      }
    }
  });

})();