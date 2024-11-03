import Swiper from "swiper";
import {Navigation, Pagination} from "swiper/modules";
import SimpleLightbox from "simplelightbox";

document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector(".header__burger-btn");
    const mobMenu = document.querySelector(".mobmenu");
    const headerInfo = document.querySelector(".header__info");
    const headerCallBtn = document.querySelector(".header__call-btn");
    const headerMenu = document.querySelector(".header__menu");
    const headerCall = document.querySelector(".header__call");
    const header = document.querySelector("header");
    const firstSection = document.querySelector(".offer");
    const docsItems = document.querySelectorAll(".docs__item");
    const docsSliderWrapper = document.querySelector(".docs__slider .swiper-wrapper");

    burger.addEventListener("click", () => {
        burger.classList.toggle("active");
        mobMenu.classList.toggle("active");
        header.classList.toggle("active");
        document.querySelector("html").classList.toggle("lock");
    });
    
    firstSection.style.paddingTop = header.getBoundingClientRect().height + "px";
    mobMenu.style.paddingTop = header.getBoundingClientRect().height + "px";

    if (window.innerWidth <= 992) {
        mobMenu.querySelector(".mobmenu__bottom").append(headerInfo, headerCallBtn);

        firstSection.style.paddingTop = header.getBoundingClientRect().height + "px";
        mobMenu.style.paddingTop = header.getBoundingClientRect().height + "px";

        docsItems.forEach(el => {
            const slide = document.createElement("div");
            slide.classList.add("swiper-slide");

            slide.append(el);

            docsSliderWrapper.append(slide);
        })
    }

    if (window.innerWidth <= 768) {
        mobMenu.querySelector(".mobmenu__top").append(headerMenu);
        mobMenu.querySelector(".mobmenu__bottom").append(headerCall);
        mobMenu.querySelector(".mobmenu__bottom").append(headerCallBtn);
        
        firstSection.style.paddingTop = header.getBoundingClientRect().height + "px";
        mobMenu.style.paddingTop = header.getBoundingClientRect().height + "px";
    }

    const dataTabTitles = document.querySelectorAll("[data-tab-title]");
    const dataTabContents = document.querySelectorAll("[data-tab-content]")

    dataTabTitles.forEach((el, i) => {
        el.addEventListener("click", (e) => {
            if (el.classList.contains("active") === true) {
                dataTabContents[i].style.height = "0px";
                el.classList.remove("active");
                dataTabContents[i].classList.remove("active");
            } else {
                dataTabTitles.forEach((elj, j) => {
                    dataTabContents[j].style.height = 0 + "px";
                    elj.classList.remove("active");
                    dataTabContents[j].classList.remove("active");
                })
                dataTabContents[i].style.height = dataTabContents[i].scrollHeight + "px";
                el.classList.add("active");
                dataTabContents[i].classList.add("active");
            }
        });
    });

    // Sliders
    const employeesSlider = new Swiper('.employees__slider', {
        modules: [Navigation, Pagination],
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 5,
        navigation: {
            prevEl: '.employees__slider-arrow--prev',
            nextEl: '.employees__slider-arrow--next',
        },
        pagination: {
            el: '.employees__slider-pag',
            clickable: true,
            dynamicBullets: true
        },
        breakpoints: {
            992: {
                slidesPerView: 4,
                slidesPerGroup: 2,
                pagination: {
                    dynamicBullets: false
                }
            },

            768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                pagination: {
                    dynamicBullets: false
                }
            },

            576: {
                pagination: {
                    dynamicBullets: false
                }
            }
        }
    })

    const certificatesSlider = new Swiper('.certificates__slider', {
        modules: [Navigation, Pagination],
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 5,
        navigation: {
            prevEl: '.certificates__slider-arrow--prev',
            nextEl: '.certificates__slider-arrow--next',
        },
        pagination: {
            el: '.certificates__slider-pag',
            clickable: true,
            dynamicBullets: true
        },
        breakpoints: {
            992: {
                slidesPerView: 4,
                slidesPerGroup: 2,
                pagination: {
                    dynamicBullets: false
                }
            },

            768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 30,
                pagination: {
                    dynamicBullets: false
                }
            },

            576: {
                pagination: {
                    dynamicBullets: false
                }
            }
        }
    })

    const workpointSlider = new Swiper('.workpoint__slider', {
        modules: [Navigation, Pagination],
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 5,
        resistanceRatio: 1,
        centeredSlides: true,
        navigation: {
            prevEl: '.workpoint__slider-arrow--prev',
            nextEl: '.workpoint__slider-arrow--next',
        },
        pagination: {
            el: '.workpoint__slider-pag',
            clickable: true,
            dynamicBullets: true
        },
        breakpoints: {
            992: {
                slidesPerView: 2.1,
                slidesPerGroup: 1,
                pagination: {
                    dynamicBullets: false
                }
            },

            768: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                centeredSlides: false,
                spaceBetween: 0,
                pagination: {
                    dynamicBullets: false
                }
            },

            576: {
                pagination: {
                    dynamicBullets: false
                }
            }
        }
    })

    const docsSlider = new Swiper('.docs__slider', {
        modules: [Navigation, Pagination],
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 5,
        navigation: {
            prevEl: '.docs__slider-arrow--prev',
            nextEl: '.docs__slider-arrow--next',
        },
        pagination: {
            el: '.docs__slider-pag',
            clickable: true,
            dynamicBullets: true
        },
        breakpoints: {
            992: {
                pagination: {
                    dynamicBullets: false
                }
            },

            768: {
                pagination: {
                    dynamicBullets: false
                }
            },

            576: {
                pagination: {
                    dynamicBullets: false
                }
            }
        }
    })

    // Gallery
    const gallerys = document.querySelectorAll("[data-gallery]");

    gallerys.forEach(el => {
        new SimpleLightbox(el.querySelectorAll("a"))
    })


});