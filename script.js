const burger = document.getElementById('burger');
const navbarSupportedContent = document.getElementById('navbarSupportedContent');
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');
const navLinks = document.querySelectorAll('#navbarSupportedContent .nav-link');

burger.addEventListener('click', () => {
    navbarSupportedContent.classList.toggle('hidden');

    // Toggle burger lines to create "X" effect
    line1.classList.toggle('line1-open');
    line2.classList.toggle('line2-open');
    line3.classList.toggle('line3-open');

});

// Close the menu when a nav link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (!navbarSupportedContent.classList.contains('hidden')) {
            navbarSupportedContent.classList.add('hidden');

            // Reset burger lines to original state
            line1.classList.remove('line1-open');
            line2.classList.remove('line2-open');
            line3.classList.remove('line3-open');
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
});