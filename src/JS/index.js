document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector(".header__burger-btn");
    const mobMenu = document.querySelector(".mobmenu");
    const headerInfo = document.querySelector(".header__info");
    const headerCallBtn = document.querySelector(".header__call-btn");
    const headerMenu = document.querySelector(".header__menu");
    const headerCall = document.querySelector(".header__call");
    const header = document.querySelector("header");

    burger.addEventListener("click", () => {
        burger.classList.toggle("active");
        mobMenu.classList.toggle("active");
        document.body.classList.toggle("lock");

        mobMenu.style.paddingTop = header.getBoundingClientRect().height + "px";
    });

    if (window.innerWidth <= 992) {
        mobMenu.querySelector(".mobmenu__bottom").append(headerInfo, headerCallBtn);
        mobMenu.style.paddingTop = header.getBoundingClientRect().height + "px";
    }

    if (window.innerWidth <= 768) {
        mobMenu.querySelector(".mobmenu__top").append(headerMenu);
        mobMenu.querySelector(".mobmenu__bottom").append(headerCall);
        mobMenu.querySelector(".mobmenu__bottom").append(headerCallBtn);
        mobMenu.style.paddingTop = header.getBoundingClientRect().height + "px";
    }
});