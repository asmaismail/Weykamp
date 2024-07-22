$(document).ready(function() {
  $('.banner-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    fade: true
  });
});
// footer
document.addEventListener('DOMContentLoaded', function () {
  const background = document.querySelector('.background');
  const dotSize = 2; 
  const spacing = 12; 
  background.style.backgroundImage = `radial-gradient(#555 ${dotSize}px, transparent ${dotSize}px)`;
  background.style.backgroundSize = `${spacing}px ${spacing}px`;
});
//img filter
$(document).ready(function() {
  $('.img-container').addClass('show');
  $('.filter-btn').click(function() {
      var filterValue = $(this).attr('data-filter');
      $('.filter-btn').removeClass('filter-active');
      $(this).addClass('filter-active');
      if (filterValue == 'all') {
          $('.img-container').addClass('show');
      } else {
          $('.img-container').removeClass('show');
          $('.' + filterValue).addClass('show');
      }
  });
});
//
