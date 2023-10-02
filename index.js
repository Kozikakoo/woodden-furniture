const cardButton = document.querySelectorAll('.cards__button');
const popup = document.querySelector('.popup');
const popupImg = popup.querySelector('.popup__img');
const popupText = popup.querySelector('.popup__sign');
const closeButton = document.querySelector('.popup__close');


function openPopup(e) {
    popup.classList.add('popup_open');
    let parent = e.target.parentNode;
    let img = parent.querySelector('.cards__image');
    let text = parent.querySelector('.cards__title');
    popupImg.src = img.src;
    popupImg.alt = img.alt;
    console.log(popupImg.alt)
    popupText.textContent = text.textContent;
}

function closePopup() {
    popup.classList.remove('popup_open');
}

cardButton.forEach((item) => {
    item.addEventListener('click', (e) => openPopup(e));
})

closeButton.addEventListener('click', closePopup);