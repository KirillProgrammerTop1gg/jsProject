const footerInputEl = document.querySelector('.footer__inputer');
const footerButEl = document.querySelector('.footer__subscribe');
const backdropModal = document.querySelector('.overlay[data-modal-subscribe]');
const closeButModal = document.querySelector('.subscribe-modal__close[data-modal-close]');
const footerFormEl = document.querySelector('.footer__form');

footerFormEl.addEventListener('submit', (e) => e.preventDefault());
footerButEl.addEventListener('submit', (e) => e.preventDefault());

footerButEl.addEventListener('click', () => /^[^\s@]+@[^\s@]+$/.test(footerInputEl.value.trim()) ? backdropModal.classList.toggle("is-hidden") : null);
closeButModal.addEventListener("click", () => backdropModal.classList.toggle("is-hidden"));