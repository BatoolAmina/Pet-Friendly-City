
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
  menuToggle.classList.toggle('active');
});

// Close menu when a link is clicked (mobile)
document.querySelectorAll('.navbar ul li a').forEach(link => {
  link.addEventListener('click', () => {
    if (navbar.classList.contains('active')) {
      navbar.classList.remove('active');
      menuToggle.classList.remove('active');
    }
  });
});

// Smooth scroll polyfill (optional, modern browsers support this natively)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetID = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetID);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
