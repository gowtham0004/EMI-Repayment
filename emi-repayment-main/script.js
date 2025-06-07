document.addEventListener('DOMContentLoaded', function() {
    // Login Form Submission
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const role = document.getElementById('role').value;
            const loginMessage = document.getElementById('loginMessage');

            if (validateEmail(email)) {
                if (role === 'management') {
                    window.location.href = 'management.html';
                } else if (role === 'customer') {
                    window.location.href = 'customer.html';
                } else if (role === 'agent') {
                    window.location.href = 'agent.html';
                } else {
                    loginMessage.textContent = 'Please select a valid role.';
                    loginMessage.style.color = 'red';
                }
            } else {
                loginMessage.textContent = 'Invalid email format. Please use a Gmail address.';
                loginMessage.style.color = 'red';
            }
        });
    }

    // Create Account Form Submission
    const createAccountForm = document.getElementById('createAccountForm');
    if (createAccountForm) {
        createAccountForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const age = document.getElementById('age').value;
            const dob = document.getElementById('dob').value;
            const email = document.getElementById('newEmail').value;
            const password = document.getElementById('newPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const createAccountMessage = document.getElementById('createAccountMessage');

            if (validateEmail(email)) {
                if (password === confirmPassword) {
                    createAccountMessage.textContent = 'Account created successfully!';
                    createAccountMessage.style.color = 'green';
                    // Simulate account creation, redirect to login page or home page
                    setTimeout(() => { window.location.href = 'login.html'; }, 1000);
                } else {
                    createAccountMessage.textContent = 'Passwords do not match.';
                    createAccountMessage.style.color = 'red';
                }
            } else {
                createAccountMessage.textContent = 'Invalid email format. Please use a Gmail address.';
                createAccountMessage.style.color = 'red';
            }
        });
    }

    // Email Validation Function
    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        return regex.test(email);
    }
});