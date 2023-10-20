const hamburgerMenu = document.querySelector('.hamburger-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.mobile-menu .nav-links');

hamburgerMenu.addEventListener('click', () => {
    mobileMenu.style.left = mobileMenu.style.left === '0px' ? '-250px' : '0px';
    navLinks.style.display = 'block';
});

