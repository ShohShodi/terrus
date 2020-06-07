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
    targets: '#logoPath',
    d: [{
      value: [
        'M-2-11.761s.154,19.2.6,19.638C3.448,10.264,4.768-3.136,13.5-2.72S19.862,7.921,29.227,8.272c9.248-1.054,10.3-10.418,17.793-11.8,8.9-.018,10.8,11.214,17.91,10.868C72.685,6.744,75.761-.5,82.723-.39,89.408-.409,89.469,5.392,99.36,6s14.752-9.534,14.752-9.534v-8.3Z'
      ]
    }],
    duration: 5000,
    direction: "alternate",
    easing: 'linear',
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