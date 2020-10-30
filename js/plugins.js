/*========== NAVBAR TRANSPARENT TO SOLID ==========*/
$(document).ready(function () {
    checkScroll();
    $(window).scroll(checkScroll);
});

function checkScroll() {
  if ($(window).scrollTop() >= 300) {
      $('.navbar').addClass('solid');
  }
  else {
      $('.navbar').removeClass('solid');
  }
}

/*========== ADD SOLID CLASS TO NAVBAR WHEN TOGGLED ==========*/
$('.navbar-toggler').click(function () {
    if ($(window).scrollTop() <= 300) {
      $("nav.navbar").toggleClass("solid-toggle");
    }
});

/*========== CLOSE MOBILE MENU ON CLICK & SMOOTH SCROLL TO LINK a[href^="#"] ==========*/
$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();
  $('.navbar-toggler').addClass('collapsed');
  $('#navbarResponsive').removeClass('show');

  setTimeout(function () {
      $('nav.navbar').removeClass('solid-toggle');
  }, 300);

  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
  }, 300);
});
