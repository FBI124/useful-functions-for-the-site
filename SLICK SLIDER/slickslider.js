	$('.carousel__inner').slick({
		speed: 1300,
		autoplay: true,
		autoplaySpeed: 3000,
		fade: true,
		speed: 900,
		cssEase: 'linear',
		prevArrow: '<button type="button" class="slick-prev"><img src="your way"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="your way"></button>',
		dots: '<button type="button" class="slick-dots"></button>', // for adaptaton
		responsive: [
			{
				breakpoint: 991,
				settings: {
				  arrows: false,
				  dots: true
				}
			}
		]
	});	
