
let btnTop = document.querySelector(".btn-top");

window.onscroll = function(){
 this.scrollY >= 600 ? btnTop.classList.add('show'):btnTop.classList.remove('show');
}

btnTop.addEventListener("click", function(){
  window.scrollTo({
    top:0,
    behavior:"smooth",
  });
});

  $(function() {
    $('.skitter-large').skitter(
      
    );
  });


  $(document).ready(function(){
    $('.our-partner-container').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        centerMode : true,
        dots : true,
        arrows : false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
          
            }
          },
          {
            breakpoint: 520,
            settings: {
              slidesToShow: 2,
             dots:false,
            }
          },
         
        ]
      
    });
  });

  new WOW().init();
  // start skitter
