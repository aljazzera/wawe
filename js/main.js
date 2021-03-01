$(function(){


  $(window).scroll(function() {
    if ($(this).scrollTop() > 1){
    $('.header').addClass("sticky");
    }
    else{
    $('.header').removeClass("sticky");
    }
  });


  $(".menu a, .header__logo, .hero__icon, .footer__bottom-link").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1200);
	});


  $('.burger, .menu a').on('click', function(){
    $('.menu__list, .burger').toggleClass('active');
  });


  $('.blog__slider-inner').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3800,
  });


  var mixer = mixitup('.portfolio__gallery', {
    animation: {
      duration: 500
    }
  });

});