//modal windows

	$('[data-modal=your class]').on('click', function() {
		$('.overlay (dimming, if necessary), #your class').fadeIn();
	});

//customization of the form

	function valideForms(your class) {
		$(your class).validate({
			rules: {
				name: 'required',
				phone: {
					minlength: your number,
					required: true
				},
				email: {
					required: true,
					email: true
				}
			},
			messages: {
				name: "your text",
				phone: {
					required: "your text",
				},
				email: {
				  required: "your text",
				  email: "your text"
				}
			}	
		});
	};

  //red cross to close the form

	$('.modal__close').on('click', function() {
		$('.overlay, #consultation, #application, #order').fadeOut();
	});

	//form validation

	valideForms('#your class (selector)');
	valideForms('#your class (selector)');
	valideForms('#your class (selector)');
