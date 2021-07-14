jQuery(function($) {

    console.log("jQuery start");

    $(document).ready(function(){
        $('.slider').slick({
            autoplay: true,
            dots: true,
            arrows: false,
            infinite: true,
            fade: true,
            autoplaySpeed: 2000,
        });
      });
  
      $(document).ready(function(){
        $('.slider-2').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            dots: true,
            autoplaySpeed: 2000,
            responsive: [
                
                {
                  breakpoint: 768,
                  settings: {
                    
                    slidesToShow: 1
                  }
                }
              ]
        });
      });
})
