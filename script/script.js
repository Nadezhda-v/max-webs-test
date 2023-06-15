document.addEventListener('DOMContentLoaded', function () {
    const mainInputTel = document.querySelector('.main__input-tel');

    mainInputTel.addEventListener('input', function (event) {
        const inputValue = event.target.value;
        if (inputValue.length === 1) {
            VMasker(event.target).maskPattern('9(999) 999 99 99');
            event.target.value = '7' + inputValue;
        }
    });

    const headerMenuButton = document.querySelector('.header__menu-button');
    const headerMenuList = document.querySelector('.header__menu-list');

    const changeMenu = function () {
        headerMenuButton.classList.toggle('change');
    }

    const showMenu = function () {
        headerMenuList.classList.toggle('show');
    }

    const closeMenu = function (event) {
        const target = event.target;
        if (!target.closest('.header__menu-button') && !target.closest('.header__menu-list')) {
            headerMenuButton.classList.remove('change');
            headerMenuList.classList.remove('show');
        }
    };

    headerMenuButton.addEventListener('click', changeMenu);
    headerMenuButton.addEventListener('click', showMenu);
    document.addEventListener('click', closeMenu);
});

