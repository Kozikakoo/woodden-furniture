const cardButton = document.querySelectorAll('.cards__button');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__close');

function openImage(element) {
    const cardImage = element.querySelector('.cards__image');
    const cardTitle = element.querySelector('.cards__title');
    let popupSign = document.querySelector('.popup__sign');
    let popupImage = document.querySelector('.popup__img');

    console.log(pi.src);
    popupSign.textContent = cardTitle.textContent;
    popupImage.src = cardImage.src;
}

cardButton.forEach((item) => item.addEventListener('click', () => {
    const hu = item.closest('.cards__item');
    popup.classList.add('popup_open');
    console.log(hu);
    popitka(hu);
}));

closeButton.addEventListener('click', () => {
    popup.classList.remove('popup_open');
})

