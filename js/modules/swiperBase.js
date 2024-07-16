"use strict";
export class SwiperBase {
    constructor(swiper, options) {
        this.swiper = swiper;
        this.options = options;
        this.slides = this.swiper.querySelectorAll(`:scope .${options.slideClass}`);
        this.nSlides = this.slides.length;
        this.nActiveSlide = 0;
        if (this.options.swipe.swipe == "class") {
            this.activeSlide = this.swiper.querySelector(`:scope .${this.options.swipe.class}`);
        }
        if (this.options.pagination) {
            this.swiperPaginationItems = this.swiper.querySelectorAll(`.${this.options.paginationClass}`);
            this.swiperPaginationItemActive = this.swiper.querySelector(`.${this.options.paginationClassActive}`);
        }
        if (this.options.autoPlay) {
            const self = this;
            setInterval(self.nextSlide.bind(self), self.options.autoPlayTime);
        }
        const self = this;
        this.changeWidth();
        window.addEventListener("resize", self.changeWidth.bind(self));
    }
}
