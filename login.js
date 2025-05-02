// Handle the form submission
document.getElementById("loginForm").onsubmit = function(event) {
    event.preventDefault();
  
    // Get the input values
    const userId = document.getElementById("userId").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");
  
    // Dummy validation for demonstration (you can replace this with actual backend validation)
    if (userId === "admin" && password === "123") {
    
        // Redirect to another page (e.g., dashboard or home) or load further content here
        window.location.href = "home.html"; // Replace this with the actual page you want to redirect to
    } else {
        errorMessage.textContent = "Invalid User ID or Password!";
    }
  };