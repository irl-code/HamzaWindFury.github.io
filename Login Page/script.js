// Get DOM elements
const loginForm = document.getElementById('loginForm');
const loggedInMessage = document.getElementById('loggedInMessage');
const logoutButton = document.getElementById('logoutButton');

// Function to handle form submission
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Simulate login process (replace with actual login logic)
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    // Example validation (replace with your actual validation logic)
    if (username === 'admin' && password === 'password') {
        // Successful login
        loginForm.reset(); // Clear form fields
        showLoggedInState(); // Show logged-in message
        redirectToIndex(); // Redirect to index.html
    } else {
        // Invalid credentials (replace with actual error handling)
        alert('Invalid username or password. Please try again.');
    }
});

// Function to show logged-in state and hide login form
function showLoggedInState() {
    loggedInMessage.style.display = 'block';
    loginForm.style.display = 'none';
}

// Function to redirect to index.html
function redirectToIndex() {
    window.location.href = 'index.html'; // Replace with your actual index.html URL
}

// Event listener for logout button click
logoutButton.addEventListener('click', function() {
    loggedInMessage.style.display = 'none';
    loginForm.style.display = 'block';
});

// Initial setup: Show login form and hide logged-in message
loginForm.style.display = 'block';
loggedInMessage.style.display = 'none';