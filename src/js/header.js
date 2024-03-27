const butEl = document.querySelector('.header__switcher');
const iconEl = document.querySelector('.header__icon');
const imgSunEl = document.querySelector('.header__img[data-sun]');
const imgMoonEl = document.querySelector('.header__img[data-moon]');
let darkTheme = false;

butEl.addEventListener('click', () => {
    darkTheme = !darkTheme
    iconEl.style.transform = darkTheme ? 'translate(20px)' : 'translate(0px)';
    iconEl.style.backgroundColor = darkTheme ? '#000' : '#fff';
    if (darkTheme) {
        imgSunEl.style.opacity = '0';
        imgSunEl.style.position = 'absolute';
        imgMoonEl.style.opacity = '1';
        imgMoonEl.style.position = 'static';
        document.body.style.color = 'white';
        document.body.style.backgroundColor = '#6f6f6f';
        document.querySelector('.container').style.backgroundColor = '#6f6f6f';
        document.querySelector('main').style.backgroundColor = '#bdbdbd';
    }
    else {
        imgMoonEl.style.opacity = '0';
        imgMoonEl.style.position = 'absolute';
        imgSunEl.style.opacity = '1';
        imgSunEl.style.position = 'static';
        document.body.style.color = 'black';
        document.body.style.backgroundColor = 'white';
        document.querySelector('.container').style.backgroundColor = 'white';
        document.querySelector('main').style.backgroundColor = '#F5F5F5';
    }
});