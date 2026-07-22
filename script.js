const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#site-nav');
navToggle?.addEventListener('click', () => {
  const next = navToggle.getAttribute('aria-expanded') !== 'true';
  navToggle.setAttribute('aria-expanded', String(next));
  nav.classList.toggle('open', next);
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  navToggle?.setAttribute('aria-expanded', 'false');
}));

const quotes = [...document.querySelectorAll('.quote')];
const dots = [...document.querySelectorAll('.slider-controls i')];
let activeQuote = 0;
function showQuote(index) {
  activeQuote = (index + quotes.length) % quotes.length;
  quotes.forEach((quote, i) => quote.classList.toggle('active', i === activeQuote));
  dots.forEach((dot, i) => dot.classList.toggle('active', i === activeQuote));
}
document.querySelectorAll('[data-slide]').forEach(button => button.addEventListener('click', () => {
  showQuote(activeQuote + (button.dataset.slide === 'next' ? 1 : -1));
}));
