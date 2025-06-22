import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.faq-swiper', {
        modules: [Navigation],
        breakpoints: {
            374: {
                slidesPerView: 1,
                spaceBetween: 10,


            },
            1439: {
                slidesPerView: 3,
                spaceBetween: 24,

            },
        },

        loop: true,
        slideClass: 'faq-swiper-slide',
        wrapperClass: 'faq-swiper-wrapper',
        direction: 'horizontal',

        navigation: {
            nextEl: '.faq-custom-next',
            prevEl: '.faq-custom-prev',
        },

        on: {
            reachBeginning: function () {
                document.querySelector('.custom-prev').classList.add('swiper-button-disabled');
            },
            reachEnd: function () {
                document.querySelector('.custom-next').classList.add('swiper-button-disabled');
            },
        },
    });
    new Swiper('.reviews-swiper', {
        modules: [Navigation],
        breakpoints: {
            374: {
                slidesPerView: 1,
                spaceBetween: 10,
                centeredSlides: false,

            },
            1439: {
                slidesPerView: 3,
                spaceBetween: 24,
                centeredSlides: false,

            },
        },

        loop: true,
        slideClass: 'reviews-swiper-slide',
        wrapperClass: 'reviews-swiper-wrapper',
        direction: 'horizontal',

        navigation: {
            prevEl: '.reviews-custom-prev',
            nextEl: '.reviews-custom-next',
        },

        on: {
            reachBeginning: function () {
                document.querySelector('.custom-prev').classList.add('swiper-button-disabled');
            },
            reachEnd: function () {
                document.querySelector('.custom-next').classList.add('swiper-button-disabled');
            },
        },
    });
});