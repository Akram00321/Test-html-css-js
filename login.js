document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const message = document.getElementById('message');

    if (username === '' || password === '') {
        message.style.color = 'red';
        message.textContent = 'Both fields are required!';
    } else {
        message.textContent = '';
        // Simulate successful login and redirect to dashboard
        window.location.href = 'map.html';
    }
});

function clearForm() {
    document.getElementById('loginForm').reset();
    document.getElementById('message').textContent = '';
}

function forgotPassword() {
    const username = document.getElementById('username').value.trim();

    if (username === '') {
        alert('Please enter your username to recover password.');
    } else {
        alert(`Password reset instructions sent to ${username}'s registered email (mock).`);
    }
}
