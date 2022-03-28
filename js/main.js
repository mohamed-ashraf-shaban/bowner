
  $(document).ready(function(){
    $('.our-partner-container').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode : true,
        dots : true,
        arrows : false,
    });
  });

  new WOW().init();