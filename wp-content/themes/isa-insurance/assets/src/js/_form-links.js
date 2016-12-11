var $ = require('jquery');

module.exports = (function() {

  $('#menu-top-menu li:last-child a').click(function(e) {
    $('.report-accident-form-block').toggleClass('visible');
    $('.bg-overlay').toggleClass('visible');
    return false;
  });

  $('.get-insurance, #menu-item-8 a').click(function(e) {
    $('html, body').animate({
      scrollTop: 0
    }, 400);
    $('.new-customer-form-block').toggleClass('visible');
    $('.bg-overlay').toggleClass('visible');
    return false;
  });

  $('.bg-overlay, .close').click(function() {
    $('.report-accident-form-block, .new-customer-form-block').removeClass('visible');
    $('.bg-overlay').toggleClass('visible');
  });

})();