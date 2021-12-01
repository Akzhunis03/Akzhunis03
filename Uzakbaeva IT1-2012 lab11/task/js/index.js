//только цифцы
function onlyNumberKey(evt) {
          
    // Only ASCII character in that range allowed
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}
$(function () {
	$('.sign-up-form').submit(function (e) {
		e.preventDefault();

		let data = {
			email: email.value,
			username: username.value,
			contact: contact.value,
			password: password.value,
		};
/*
		alert(`
            email: ${data.email.trim() || 'empty'}
            username: ${data.username.trim() || 'empty'},
            contact: ${data.contact.trim() || 'empty'},
            password: ${data.password.trim() || 'empty'},
        `);*/
	});
});
