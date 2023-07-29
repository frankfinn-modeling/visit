document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulate form submission (replace this with actual handling logic)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    alert('Message sent successfully!'); // Replace this with a proper success message
});
document.getElementById('model-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const shortPhoto = document.getElementById('short-photo').files[0];
    const fullBodyPhoto = document.getElementById('full-body-photo').files[0];
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;
    const registrationFee = document.getElementById('registration-fee').value;

    // You can handle the file uploads and submit the form data here
    // For example, you can use FormData to handle file uploads

    const formData = new FormData();
    formData.append('name', name);
    formData.append('age', age);
    formData.append('height', height);
    formData.append('weight', weight);
    formData.append('shortPhoto', shortPhoto);
    formData.append('fullBodyPhoto', fullBodyPhoto);
    formData.append('city', city);
    formData.append('country', country);
    formData.append('registrationFee', registrationFee);

    // Send the form data to your server using fetch or AJAX
    // Replace the URL with your actual server endpoint
    fetch('your-server-endpoint', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        console.log('Registration Successful!', data);
        alert('Registration Successful!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Registration failed. Please try again later.');
    });
});
