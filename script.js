// script.js

// Navigation
function showPage(pageId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
  document.getElementById('navLinks').classList.remove('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Mobile Menu Toggle
document.getElementById('mobileMenu').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('active');
});

// Contact Form Submission Simulation
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const submitBtn = this.querySelector('.submit-btn');
  const originalText = submitBtn.textContent;

  submitBtn.textContent = 'Sending...';
  submitBtn.disabled = true;

  setTimeout(() => {
    alert('Thank you for your message! I’ll get back to you soon.');
    this.reset();
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }, 1500);
});
