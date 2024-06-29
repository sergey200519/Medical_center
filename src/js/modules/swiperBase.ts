"use strict";
type Arrow = {
    leftArrowClass: string;
    rightArrowClass: string;
}

type Swipe = {
    swipe: "class" | "tranlate";
    class?: string;
}

export type Options = {
    slideClass: string;
    pagination: boolean;
    paginationClass?: string;
    paginationClassActive?: string;
    swipe: Swipe;
    autoPlay: boolean;
    autoPlayTime?: number;
    nSlideSimultaneously?: number;
    arrow?: Arrow;
    more?: {
        [key: string]: string;
    };
}

interface Swiper {
    render(): void;
    changeWidth(): void;
}

export abstract class SwiperBase implements Swiper {
    protected swiper: HTMLElement;
    protected options: Options;
    protected slides: NodeListOf<HTMLElement>;
    protected activeSlide: HTMLElement;
    protected nActiveSlide: number; 
    protected swiperPaginationItems: NodeListOf<HTMLElement>;
    protected swiperPaginationItemActive: HTMLElement;

    abstract render(): void;
    abstract changeWidth(): void;
    abstract nextSlide(): void;

    constructor(swiper: HTMLElement, options: Options) {
        this.swiper = swiper;
        this.options = options;
        

        this.slides = this.swiper.querySelectorAll(`:scope .${options.slideClass}`);
        this.nActiveSlide = 0;

        if (this.options.swipe.swipe == "class") {
            this.activeSlide = this.swiper.querySelector(`:scope .${this.options.swipe.class}`);
        }


        if (this.options.pagination) {
            this.swiperPaginationItems = this.swiper.querySelectorAll(`.${this.options.paginationClass}`);
            this.swiperPaginationItemActive = this.swiper.querySelector(`.${this.options.paginationClassActive}`);
        }

        if (this.options.autoPlay) {
            const self: SwiperBase = this;
            setInterval(self.nextSlide.bind(self), self.options.autoPlayTime);
        }
    }
}