$(document).ready(function(){

    $('.partners__carousel').slick({
        slidesToShow: 9,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 320,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
        



    $('section.object').on('click', 'button:not(.marker_active)', function(){
        $(this).addClass('marker_active').siblings().removeClass('marker_active');
        $('div.object__workshop').toggleClass('object__workshop_active');
    });

    $('.about-company__carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
      });

      $(window).width(function(){
        if($(this).width()>550){
          $(window).scroll(function() {
            if ($(this).scrollTop()>1600){
              $('.pageup').fadeIn();
            } else{
              $('.pageup').fadeOut();
            }
          });
        } else{
          return;
        }
      });

        //Scroll
      $("a[href^='#']").click(function(){
      const _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      return false;
      });
});

$(window).scroll(function(){
  if ( $(this).scrollTop() > 1500 ) {
    $('#scrup').animate({ num: 500 - 1/* - начало */ }, {
      duration: 5000,
      step: function (num){
          this.innerHTML = (num + 1).toFixed(0) + ' млн';
      }
  });   
  }
});