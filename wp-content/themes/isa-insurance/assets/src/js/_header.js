var $ = require('jquery');

module.exports = (function() {

  if( $(window).width() > 1024 ) {

      if( $(window).scrollTop() > 100 ) {
        $('.main-header').addClass('scrolled');
      } else {
        $('.main-header').removeClass('scrolled');
      }

  }

  $(window).scroll(function() {

    if( $(window).width() > 1024 ) {

      if( $(window).scrollTop() > 100 ) {
        $('.main-header').addClass('scrolled');
      } else {
        $('.main-header').removeClass('scrolled');
      }

    }

    $('.site-block').each(function() {
      if(
          ($(window).scrollTop() + $('.main-header').height()) >= $(this).position().top 
          && ($(window).scrollTop() + $('.main-header').height()) <= ($(this).position().top + $(this).height()) 
          && !$('body').hasClass('scrolling')
        ) {
        $('.top-menu a').removeClass('active');
        $('.top-menu a[href="#' + $(this).attr('id') + '"]').addClass('active');
      }
    });
  
  });

})();