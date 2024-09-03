// Select elements
const hamIcon = document.querySelector('.ham');
const hamburgerMenu = document.querySelector('.hamburger');

// Toggle the hamburger menu visibility
hamIcon.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('show');
});
