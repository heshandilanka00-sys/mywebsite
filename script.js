const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const filterButtons = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');
const revealEls = document.querySelectorAll('.reveal');

menuToggle?.addEventListener('click', () => {
  const open = nav.getAttribute('data-open') === 'true';
  nav.setAttribute('data-open', String(!open));
  menuToggle.setAttribute('aria-expanded', String(!open));
  menuToggle.textContent = open ? '☰' : '✕';
});

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;

    productCards.forEach(card => {
      const categories = card.dataset.category.split(' ');
      const show = filter === 'all' || categories.includes(filter);
      card.classList.toggle('hidden', !show);
    });
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

revealEls.forEach(el => observer.observe(el));

document.querySelector('.contact-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thanks! Your message has been prepared for EDDY. Connect this form to WhatsApp or email next.');
});
