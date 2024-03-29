/* POPUP */

const cardButton = document.querySelectorAll('.cards__button, .service__button, .header__button');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__close');

function openPopup() {
    popup.classList.add('popup_open');
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
    item.addEventListener('click', openPopup);

})

closeButton.addEventListener('click', closePopup);
window.addEventListener('keydown', (e) => closePopupEsc(e));
popup.addEventListener('click', (e) => closePopupByOverlay(e));

/* VALIDATION POPUP FORM */

const formButton = document.querySelector('.popup__button');
const formInputs = document.querySelectorAll('.popup__input');
const formPopup = document.querySelector('.popup__form');

const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.add('popup__input_type_error');
    errorElement.textContent = errorMessage;

};

const hideInputError = (formElement, inputElement) => {

    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.remove('popup__input_type_error');
    errorElement.textContent = '';
};

const hasInvalidInput = (formInputs) => {
    return Array.from(formInputs).some((inputElement) => {
        return !inputElement.validity.valid;
    })
};

const isButtonDisabled = () => {
    hasInvalidInput(formInputs) ? formButton.disabled = true : formButton.disabled = false
}

const isValid = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement);
    }
    isButtonDisabled();

};


Array.from(formInputs).forEach((formInput) => {
    formInput.addEventListener('input', () => {
        isValid(formPopup, formInput);
    })
})
formPopup.addEventListener('submit', (e) => {
    e.preventDefault();
})

formButton.addEventListener('click', () => {
    closePopup();
    formPopup.reset();


});

/* BURGER MENU */

const burgerButton = document.querySelector('.header__burger');
const closeButtonBurger = document.querySelector('.header__close');
const navMenu = document.querySelector('.header__nav-menu');
const menuLink = document.querySelectorAll('.header__menu-link');

function toggleBurgerMenu() {
    navMenu.classList.toggle('active');
}

burgerButton.addEventListener('click', toggleBurgerMenu);
closeButtonBurger.addEventListener('click', toggleBurgerMenu);
menuLink.forEach((item) => item.addEventListener('click', toggleBurgerMenu));

/* FOOTER */

const titleElements = document.querySelectorAll('.footer__title, .footer__title_additional');

function openFooterList(titleElement) {
    const column = titleElement.parentElement;

    const list = column.querySelector('.footer__list');

    list.classList.toggle('additional');
}

titleElements.forEach((titleElement) => titleElement.addEventListener('click', () => openFooterList(titleElement)));

