jQuery(function($) {

    console.log("jQuery start");

    $(document).ready(function(){
        $('.slider').slick({
            autoplay: true,
            dots: true,
            infinite: true,
            fade: true,
            autoplaySpeed: 2000,
        });
      });
  
})