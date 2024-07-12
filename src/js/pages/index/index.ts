import { newBannerSwiper } from "./modules/bannerSwiper.js";


newBannerSwiper(document.querySelector(".swiper-section_swiper"), {
    "parent": document.querySelector(".swiper-section .container"),
    "slideClass": "swiper_body_slide",
    "pagination": true,
    "paginationClass": "swiper_navigation_item",
    "paginationClassActive": "active",
    "swipe": {
        "swipe": "class",
        "class": "active"
    },
    "autoPlay": true,
    "autoPlayTime": 10000
});


