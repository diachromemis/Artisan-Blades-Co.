
// interactive.js - Enhance user experience for the handcrafted knife website

// Toggle mobile navigation menu
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('active');
});

// Image zoom on hover
document.querySelectorAll('.product-image').forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.2)';
    });
    image.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)';
    });
});

// Form submission alert
document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you shortly.');
});
