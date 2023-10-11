const cardButton = document.querySelectorAll('.cards__button');
const popup = document.querySelector('.popup');
const popupImg = popup.querySelector('.popup__img');
const popupText = popup.querySelector('.popup__sign');
const closeButton = document.querySelector('.popup__close');

const burgerButton = document.querySelector('.header__burger');
const closeButtonBurger = document.querySelector('.header__close');
const navMenu = document.querySelector('.header__nav-menu');
const menuLink = document.querySelectorAll('.header__menu-link');

const footerList = document.querySelectorAll('.footer__list');
const footerColumn = document.querySelectorAll('.footer__column');
const footerTitle = document.querySelectorAll('.footer__title');
const footerTitleContacts = document.querySelector('.footer__title_additional');

function openPopup(e) {
    popup.classList.add('popup_open');
    let parent = e.target.parentNode;
    let img = parent.querySelector('.cards__image');
    let text = parent.querySelector('.cards__title');
    popupImg.src = img.src;
    popupImg.alt = img.alt;
    popupText.textContent = text.textContent;
}

function closePopupEsc(e) {
    if (e.key === 'Escape') {
        closePopup();
    }
}

function closePopupByOverlay(e) {
    if (e.currentTarget === e.target) {

        closePopup()
    }
}

function closePopup() {
    popup.classList.remove('popup_open');
}

cardButton.forEach((item) => {
    item.addEventListener('click', (e) => openPopup(e));

})

function toggleBurgerMenu() {
    navMenu.classList.toggle('active');
}

function openFooterList(e) {
    console.log(e.currentTarget)
    console.log(e.target)

    footerList.classList.toggle('additional');
}



closeButton.addEventListener('click', closePopup);
window.addEventListener('keydown', (e) => closePopupEsc(e));

popup.addEventListener('click', (e) => closePopupByOverlay(e));

burgerButton.addEventListener('click', toggleBurgerMenu);
closeButtonBurger.addEventListener('click', toggleBurgerMenu);
menuLink.forEach((item) => item.addEventListener('click', toggleBurgerMenu));

footerColumn.forEach((item) => item.addEventListener('click', openFooterList));
footerTitleContacts.addEventListener('click', openFooterList)
