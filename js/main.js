$(document).ready(function(){
    $('.documentation-slider__slick').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        slidesToShow: 1,
        arrows: false,
      });
      
      $(".documentation__slider-nav .left").click(
          function(e){
              $('.documentation-slider__slick').slick('slickPrev');
          }
      );
      $(".documentation__slider-nav .right").click(
          function(e){
              $('.documentation-slider__slick').slick('slickNext');
          }
      );
      $(".documentation__slide-content").fadeOut();
      $(".documentation__slide-content:eq( 0 )").fadeIn();
      $(".overlay-menu").fadeOut();
      $('.documentation-slider__slick').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $(".documentation__slide-content").fadeOut("slow");
        $(".documentation__slide-content:eq( "+nextSlide+" )").fadeIn("slow");
      });
      $('.header__humburger').click(function(e){
        e.preventDefault();
        $(".overlay-menu").fadeToggle();
        $(this).toggleClass('is-active');
        $(".header__search-form").toggleClass('is-active');
      })
      $(".modal").fadeOut();
      $(".documentation-slider__zoom-document").click(function(e){
        let img = $(this).parent().prev("img");
        $(".modal__content").empty();
        $(".modal__content").append(img.clone());
        $(".modal").fadeIn();
      })
      $(".modal__close").click(function(){
        $(".modal").fadeOut();
      });
      anime({
        targets: '#dillers-slider_first-way path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1500,
        delay: 250,
      });
      anime({
        targets: '.header__scroll-down path',
        keyframes: [
            {opacity: .5},
            {opacity: 1},
          ],
        duration: 1000,
        delay: function(el, i, l) {
          return i * 200;
        },
        direction: 'reverse',
        loop: true
      });
      let slides = 10;
      let slide = 1;
      $("#path"+slide).attr('class','active');
      function dillers_slider(){
        setTimeout(function(){
            $("svg#dillers-slider g g").attr('class','');
            if(slide%10>0){
                $("#path"+slide%10).attr('class','active');
            }
            else{
                $("#path"+10).attr('class','active');
            }
            let deg_val = (360*(slide-1)/slides);
            $("#dillers-slider_first-way").css('transform', 'rotate('+deg_val+'deg)');
            slide++;
            dillers_slider();
        },5000);
      }
      dillers_slider();
});