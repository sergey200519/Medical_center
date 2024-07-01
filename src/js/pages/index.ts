import { newBannerSwiper } from "./bannerSwiper.js";
// import { newTeamSwiper } from "./teamSwiper.js";


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


// TODO: not useed
// newTeamSwiper(document.querySelector(".team_swiper"), {
//     "parent": document.querySelector(".team"),
//     "slideClass": "swiper_body_slide",
//     "pagination": false,
//     "swipe": {
//         "swipe": "tranlate"
//     },
//     "autoPlay": false,
//     "nSlideSimultaneously": 5,
//     "arrow": {
//         "leftArrowClass": "swiper_prev",
//         "rightArrowClass": "swiper_next"
//     },
//     "more": {
//         "varPadding": "--team_swiper-padding",
//         "varGap": "--team_swiper-gap",
//         "varWidth": "--team_slide-width"

//     }
// });

// const swiper = new Swiper('.sample-slider', {
//     loop: true, 
//     pagination: {                       // pagination(dots)
//         el: '.swiper-pagination',
//     },
//     navigation: {                       // navigation(arrows)
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// })


// const swiper2 = new SwiperBase("team_swiper", {})
// console.log(swiper2);
