// script.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('feedbackForm');
    const thankYouMessage = document.getElementById('thankyouMessage');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Reset validation state
        form.classList.remove('was-validated');

        // Simple validation
        const name = form.querySelector('#name');
        const email = form.querySelector('#email');
        const rating = form.querySelector('#rating');

        let valid = true;

        // Validate name
        if (name.value.trim() === '') {
            name.classList.add('is-invalid');
            valid = false;
        } else {
            name.classList.remove('is-invalid');
            name.classList.add('is-valid');
        }

        // Validate email with simple regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            email.classList.add('is-invalid');
            valid = false;
        } else {
            email.classList.remove('is-invalid');
            email.classList.add('is-valid');
        }

        // Validate rating
        if (rating.value === '') {
            rating.classList.add('is-invalid');
            valid = false;
        } else {
            rating.classList.remove('is-invalid');
            rating.classList.add('is-valid');
        }

        if (!valid) {
            form.classList.add('was-validated');
            return;
        }

        // If valid, simulate feedback submission
        // (Here you can add actual form submission code)
        form.style.display = 'none';
        thankYouMessage.style.display = 'block';
    });
});
