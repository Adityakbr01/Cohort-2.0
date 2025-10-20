const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent form from submitting by default
    let isValid = true;

    // Clear previous errors
    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';

    // ✅ Name validation
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required';
        isValid = false;
    }

    // ✅ Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === '') {
        emailError.textContent = 'Email is required';
        isValid = false;
    } else if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = 'Enter a valid email address';
        isValid = false;
    }

    // ✅ Password validation
    if (passwordInput.value.trim() === '') {
        passwordError.textContent = 'Password is required';
        isValid = false;
    } else if (passwordInput.value.trim().length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters';
        isValid = false;
    }

    // ✅ If valid, show success message
    if (isValid) {
        alert('Form submitted successfully!');
        form.reset();
    }
});
