// ===== MOBILE MENU TOGGLE =====
document.getElementById('menu-toggle').addEventListener('click', () => {
  document.getElementById('nav-links').classList.toggle('show');
});

// ===== ACTIVE NAV LINK ON SCROLL =====
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('nav ul li a');

  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });

  // ===== SCROLL FADE-IN =====
  document.querySelectorAll('.fade-in').forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < window.innerHeight - 80) {
      el.classList.add('visible');
    }
  });
});

// ===== CONTACT FORM (DEMO HANDLER) =====
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent page reload
  alert('Thanks for your message! This form is currently a placeholder.');
});
