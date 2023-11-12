$(document).ready(function() {
    $(window).on('scroll', function() {
      var scrolled = $(window).scrollTop();
      $('.top').css('top', (0 - (scrolled * 0.25)) + 'px');
      $('.img-1').css('top', (200 - (scrolled * 0.2)) + 'px');
      $('.img-2').css('top', (200 - (scrolled * 0.4)) + 'px');
    });
  
    $('.animated-heading').hover(function() {
      $(this).toggleClass('pulse');
    });
  });
  
