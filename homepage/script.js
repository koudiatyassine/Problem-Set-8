// Function to show a welcome message when the page loads
window.onload = function() {
    console.log("Welcome to my webpage!");
};

// Function to handle button clicks
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn-primary');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Thank you for clicking!');
        });
    });
});

// Example of a function to handle form submission (Contact page)
document.querySelector('form')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    alert(`Thank you, ${name}! We will contact you at ${email}.`);
});
