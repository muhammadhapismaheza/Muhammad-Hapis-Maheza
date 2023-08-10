const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  navLinks.classList.toggle('active');
});

const navLinksList = document.querySelectorAll('#navLinks li a');
navLinksList.forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    navLinks.classList.remove('active');
  });
});
