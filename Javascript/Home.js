// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
    // Select the button using its class
    const button = document.querySelector('.onclick');
    
    // Add click event listener
    button.addEventListener('click', function() {
        // Navigate to About.html
        window.location.href = 'About.html';
    });
});