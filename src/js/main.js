// POST /users/login
document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

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
        }
    } catch (error) {
        console.error('Error:', error);
    }
});


// username, password
