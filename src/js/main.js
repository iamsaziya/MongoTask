// POST /users/login
document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const submitButton = document.querySelector('#loginForm button[type="submit"]');

    const originalButtonText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.innerHTML = '<span class="spinner"></span> Logging in...';
    try {
        const response = await fetch('/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });

        if (response.ok) {
            const data = await response.json();
            // Handle successful login
            window.location.href = '/dashboard'; // Redirect after successful login
        } else {
            // Handle login error
            console.error('Login failed');
            submitButton.disabled = false;
            submitButton.innerHTML = originalButtonText;
            
        }
    } catch (error) {
        console.error('Error:', error);
    }
});


// username, password
