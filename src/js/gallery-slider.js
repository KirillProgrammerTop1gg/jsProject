const galleryEl = document.querySelector('.gallery__list');
const leftArrowEl = document.querySelector('.gallery__arrow[data-arrow="left"]');
const rightArrowEl = document.querySelector('.gallery__arrow[data-arrow="right"]');
const indicatorsArr = document.querySelectorAll('.gallery__indicator');
let slide = 0;

const showIndication = () => {
    indicatorsArr.forEach(indicator => indicator.classList.remove('active__indicator'));
    indicatorsArr[slide / 315].classList.add('active__indicator');
}

leftArrowEl.addEventListener('click', () => {
    console.log(slide)
    slide -= slide > 0 ? 315 : 0;
    showIndication();
    galleryEl.scrollTo({
        left: slide,
        behavior: 'smooth'
    });
})

rightArrowEl.addEventListener('click', () => {
    console.log(slide)
    slide += slide < 630 ? 315 : 0;
    showIndication();
    galleryEl.scrollTo({
        left: slide,
        behavior: 'smooth'
    });
})