import { newSwiperOneSlide } from "../../modules/pages/swiperOneSlide.min.js";
newSwiperOneSlide(document.querySelector(".partners_sw1_swiper"), {
    "parent": document.querySelector(".partners_sw1"),
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
newSwiperOneSlide(document.querySelector(".partners_sw2_swiper"), {
    "parent": document.querySelector(".partners_sw2"),
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
