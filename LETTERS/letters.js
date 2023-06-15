//sending emails to the email

	$('form').submit(function(e) {
		e.preventDefault();
		if (!$(this).valid()) {
			return;
		}
		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find('input').val("");
			$('#consultation, #order').fadeOut();
            $('.overlay, #application').fadeIn();
			$('form').trigger('reset');
		})
		return false;
	});
