document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const message = document.getElementById('message');

   
    message.style.color = 'red';

 
    if (username === '' || password === '') {
        message.textContent = 'Both fields are required!';
    } else if (username.length < 4) {
        message.textContent = 'Username must be at least 4 characters.';
    } else if (password.length < 6) {
        message.textContent = 'Password must be at least 6 characters.';
    } else if (!/\d/.test(password)) {
        message.textContent = 'Password must contain at least one number.';
    } else {
        message.style.color = 'green';
        message.textContent = 'Successfully logged in!';

        setTimeout(() => {
            window.location.href = 'map.html';
        }, 10);
    }
});

function clearForm() {
    document.getElementById('loginForm').reset();
    const message = document.getElementById('message');
    message.textContent = '';
    message.style.color = 'red';
}

function forgotPassword() {
    const username = document.getElementById('username').value.trim();

    if (username === '') {
        alert('Please enter your username to recover password.');
    } else {
        alert(`Password reset instructions sent to ${username}'s registered email (mock).`);
    }
}
