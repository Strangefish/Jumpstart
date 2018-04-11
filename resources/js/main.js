
$(document).ready(function() {



  $('.carousel').slick({
    slidestoShow: 1,
    slidestoScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseonFocus: false,
    pauseonHover: false,
    infinite: true,
    adaptiveHeight: true,
  });

  $('.navbar').animate({top: '-' + z}, 150);

});

var scrollDistance = 0

.scroll('body')

var y = $(this).scrollTop();
