const backdropModal = document.querySelector('.backdrop[data-modal-welcome]');
const closeButModal = document.querySelector('.welcome-modal__close[data-modal-close]');
const inputEl = document.querySelector('.welcome-modal__input');
const saveButEl = document.querySelector('.welcome-modal__but');
const headerInf = document.querySelector('.header__greeter');
if (localStorage.getItem('user-name') === null) backdropModal.classList.toggle("is-hidden");
headerInf.innerHTML = `Вітаємо, ${localStorage.getItem('user-name') === null ? 'user' : localStorage.getItem('user-name')}!`;

closeButModal.addEventListener("click", () => backdropModal.classList.toggle("is-hidden"));
saveButEl.addEventListener('click', () => {
    localStorage.setItem('user-name', inputEl.value);
    headerInf.innerHTML = `Вітаємо, ${localStorage.getItem('user-name')}!`;
    backdropModal.classList.toggle("is-hidden");
});