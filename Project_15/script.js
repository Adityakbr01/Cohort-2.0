const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li a');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    hamburger.classList.toggle('toggle');
    // optional: update aria-expanded if you add it to HTML
  });

  // close menu when a link is clicked (mobile)
  links.forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('nav-active')) {
        navLinks.classList.remove('nav-active');
        hamburger.classList.remove('toggle');
      }
    });
  });
}
