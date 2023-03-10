const formDataDiv = document.querySelector('#formData');

const storedFormData = localStorage.getItem('formData');

if (storedFormData) {
	const formData = JSON.parse(storedFormData);

	formDataDiv.innerHTML = `
		<p>Full Name: ${formData.fullname}</p>
        <p>Username: ${formData.username}</p>
		<p>Email: ${formData.email}</p>
        <p>Phone Number: ${formData.phonenumber}</p>
        <p>Course: ${formData.course}</p>
	`;
}
