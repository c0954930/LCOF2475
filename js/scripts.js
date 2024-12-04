// Select elements
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const navItems = document.querySelectorAll('.nav-links a');

// Toggle the menu when hamburger icon is clicked
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Close the menu when any navigation link is clicked
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('show');
    });
});
