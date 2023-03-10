const myForm = document.querySelector('#myForm');

myForm.addEventListener('submit', function(event) {
	event.preventDefault();

	const fullname = document.querySelector('#fullname').value;
	const username = document.querySelector('#username').value;
    const email = document.querySelector('#email').value;
    const phonenumber = document.querySelector('#phonenumber').value;
    const course = document.querySelector('#course').value;

	const formData = {
		fullname,
		username,
        email,
        phonenumber,
        course

	};

	localStorage.setItem('formData', JSON.stringify(formData));

    console.log(formData);

	window.location.href = '/details.html';
});
