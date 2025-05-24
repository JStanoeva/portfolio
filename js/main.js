// JS to enhance interactivity and accessibility

// Update current year in footer
window.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.querySelector('[data-current-year]');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Update month and year in About section
  const monthYearEl = document.querySelector('[data-current-month-year]');
  if (monthYearEl) {
    const date = new Date();
    const month = date.toLocaleString('default', { month: 'long' });
    monthYearEl.textContent = `${month} ${date.getFullYear()}`;
  }

  // Toggle aria-expanded on the mobile menu checkbox
  const menuToggle = document.getElementById('menu-btn');
  if (menuToggle) {
    const setExpanded = () => {
      menuToggle.setAttribute('aria-expanded', menuToggle.checked ? 'true' : 'false');
    };
    setExpanded();
    menuToggle.addEventListener('change', setExpanded);
  }

  // Animate article cards on scroll
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.article-card').forEach(card => observer.observe(card));
});
