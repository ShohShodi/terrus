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
      $('.slider__item').fadeOut();
      $('.slider__item:eq('+$(".slider-nav__items.is-active").index()+')').fadeIn();
      $('.slider-nav__items').click(function(){
        $('.slider-nav__items').removeClass("is-active");
        $(this).addClass("is-active");
        $('.slider__item').fadeOut();
        $('.slider__item:eq('+$(this).index()+')').fadeIn();
      });
      function header_slider(){
        setTimeout(function(){
          let index = $(".slider-nav__items.is-active").index()?0:1;
          $(".slider-nav__items:eq("+index+")").click();
          header_slider();
        },5000)
      }
      header_slider();
      $(".header__scroll-down").click(function(){
        $('html, body').animate({scrollTop: parseInt($("#dillers").offset().top)}, 300);
      });
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
      function dillers_slider_slide(slides, element){
        let slide = 1;
        $("#dillers-slider_"+element+"-svg #path"+slide).attr('class','active');
        function dillers_slider(){
          setTimeout(function(){
              $("svg#dillers-slider_"+element+"-svg g g").attr('class','');
              if(slide%slides>0){
                  $("#dillers-slider_"+element+"-svg #path"+slide%slides).attr('class','active');
              }
              else{
                  $("#dillers-slider_"+element+"-svg #path"+slides).attr('class','active');
              }
              let deg_val = (360*(slide-1)/slides);
              $("#dillers-slider_"+element+"-way").css('transform', 'rotate('+deg_val+'deg)');
              slide++;
              dillers_slider();
          },5000);
        }
        dillers_slider();
      }
      dillers_slider_slide(10, "first");
      dillers_slider_slide(3, "second");
      
  anime({
    targets: '#logo__wave',
    d: [{
      value: [
        'M1.24 4884.81c0,0 -7.03,384.64 13.43,407.28 170.91,84.19 263.65,265.16 548.18,238.31 284.53,-26.84 289.9,-359.68 660.32,-359.68 215.22,0 347.25,144.82 492.08,252.84 89.13,66.59 443.01,106.66 657.41,12.67 249.3,-105.71 349.66,-333.96 595.27,-329.94 327.48,5.37 178.39,124.85 450.75,268.4 272.36,143.54 677.65,-6.93 677.65,-6.93 0,-184.8 4.06,-296.15 0,-485.6l-4095.09 2.65z'
      ]
    },{
      value: [
        'M1.24 4884.19c0,0 -4.74,627.44 11.09,642.8 170.91,84.18 227.48,-388.53 535.37,-373.87 307.89,14.66 224.61,375.4 554.97,387.79 326.25,-37.17 363.41,-367.53 627.71,-416.45 313.84,-0.64 380.95,395.6 631.83,383.41 273.59,-20.85 382.09,-276.58 627.7,-272.55 235.81,-0.64 237.97,204 586.92,225.48 348.95,21.47 520.4,-336.34 520.4,-336.34 2.08,-82.29 0.22,-161.92 -0.81,-242.92l-4095.18 2.65z'
      ]
    }
      ],
    duration: 7000,
    direction: "alternate",
    easing: 'easeInOutSine',
    elasticity: 100,
    loop: true
  });
  anime({
    targets: '#footer__wave',
    d: [{
      value: [
        'M47.81 1007.56c1452.98,-309.41 2219.04,0.09 3726.14,445.16 1550.43,371.35 3121.59,-561.87 4578.32,-915.65 1748.05,-395.41 3133.79,353.36 4245.33,749.17 1006.51,367.66 4032.14,301.76 4794.74,-399.39 1151.92,-838.83 2691.94,-505.86 3804.5,-114.95'
      ]
    },{
      value: [
        'M47.81 1007.56c1452.98,-309.41 2359.55,-266.51 3866.58,178.57 1550.43,371.34 3059.15,936.48 4515.88,582.7 1748.05,-395.43 2872.61,-1262.18 4411.8,-761.27 2018.07,656.77 3687.87,641.8 4495.09,303.43 374.15,-156.84 2747.12,-930 3859.68,-539.08'
      ]
    }
      ],
    duration: 7000,
    direction: "alternate",
    easing: 'easeInOutSine',
    elasticity: 100,
    loop: true
  });
});
$(".dillers-slider").hide();
$(".dillers-slider__way:eq(0)").show();
$(".dillers-slider__svg:eq(0)").show();
$(".dillers__slider-title").click(function(){
  $(".dillers__slider-circle").removeClass("is-active");
  $(".dillers__slider-circle").removeClass("active");
  $(".dillers__slider-paths").removeClass("is-active");
  $(".dillers__slider-title").removeClass("is-active");
  let i = $(this).index();
  $(".dillers-slider").fadeOut(100);
  $(".dillers-slider__way:eq("+(i-1)+")").fadeIn(200);
  $(".dillers-slider__svg:eq("+(i-1)+")").fadeIn(200);
  let circle = $(".dillers__slider-circle:eq("+(i-1)+")");
  circle.prevAll(".dillers__slider-circle").addClass("is-active")
  circle.addClass("is-active");
  circle.prevAll(".dillers__slider-paths").addClass("is-active")
  $(this).addClass("is-active");

  $(".dillers__slider-man span").css("margin-left",(i-2)*520+"px")
  setTimeout(function(){circle.addClass("active");},500)
  
  $(this).prevAll(".dillers__slider-title").addClass("is-active");

})