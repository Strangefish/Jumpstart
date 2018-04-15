


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


var lastScrollTop = 0;
  $(window).scroll(function(){
    var scrollTop = $(this).scrollTop();
    if (scrollTop - lastScrollTop > 50){
    var navHeight = $('.navbar').css('height');
    $('.navbar').animate({top: '-' + navHeight}, 150);
    lastScrollTop = scrollTop;
  } else if (lastScrollTop - scrollTop > 50) {
    $('.navbar').animate({top: '0px'}, 150);
    lastScrollTop = scrollTop;
  }
});




});
