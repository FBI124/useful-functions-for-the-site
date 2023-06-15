	//arrow to scroll up

	$(window).scroll(function() {
		if ($(this).scrollTop () > 1500) {
			$('your class').fadeIn();
		} else {
			$('your class').fadeOut();
		}
	});

	//smooth scroll on the website when you clicking on the arrow

	$("a").on('click', function(event) {
		if (this.hash !== "") {
		  event.preventDefault();
		  var hash = this.hash;
		  $('html, body').animate({
			scrollTop: $(hash).offset().top
		  }, 800, function(){
			window.location.hash = hash;
		  });
		}
	});

	//animation of reviews (wow.js + animate.css)

	new WOW().init();
