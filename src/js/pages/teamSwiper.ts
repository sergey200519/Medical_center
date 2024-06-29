import { SwiperBase, Options } from "../modules/swiperBase.js";

class TeamSwiper extends SwiperBase {
    slideWidth: number;
    swiperBody: HTMLElement;
    swiperWidth: number;
    nFirstSide: number;
    shift: number;
    nextArrow: HTMLElement;
    gap: number;
    prevArrow: HTMLElement;
    leftSide: HTMLElement;
    nextMirrored: boolean;
    prevMirrored: boolean;
    isStart: boolean;
    constructor(swiper: HTMLElement, options: Options) {
        super(swiper, options);



        this.swiperBody = swiper.querySelector("div[class$='body']");

        this.slideWidth = parseFloat(getComputedStyle(document.documentElement).getPropertyValue(this.options.more.varWidth));
        this.swiperWidth = this.swiper.getBoundingClientRect().width - (parseFloat(getComputedStyle(document.documentElement).getPropertyValue(this.options.more.varPadding)) * 2);
        console.log(this.swiperWidth, this.swiper.getBoundingClientRect());
        this.gap = (this.swiperWidth - (this.slideWidth * this.options.nSlideSimultaneously)) / (this.options.nSlideSimultaneously - 1);

        this.shift = 0;
        this.leftSide = this.slides[this.nActiveSlide];

        this.nextMirrored = false;
        this.prevMirrored = false;

        this.nextArrow = document.querySelector(`.${this.options.arrow.rightArrowClass}`);
        this.prevArrow = document.querySelector(`.${this.options.arrow.leftArrowClass}`);

        this.isStart = true;

        const self: TeamSwiper = this;
        this.nextArrow.addEventListener("click", self.nextSlide.bind(self));
        this.prevArrow.addEventListener("click", self.prevSlide.bind(self));

        this.setGap();
    }

    nextSlide(): void {
        if (this.nextMirrored &&
            this.nActiveSlide + this.options.nSlideSimultaneously >= this.slides.length + this.options.nSlideSimultaneously) {
            this.toStart();
            setTimeout(() => {
                this.nextSlide();
            }, 150);
            return;
        } else if (!this.nextMirrored &&
            this.nActiveSlide + this.options.nSlideSimultaneously + 1 >= this.slides.length) {
            this.makeMirrored("end");
            this.nextMirrored = true;
            this.nextSlide();
        } else {
            this.shift += this.slideWidth + this.gap;
            this.nActiveSlide++;
        }       
        this.render();
    }
    prevSlide(): void {
        if (this.prevMirrored && 
            this.nActiveSlide < 0 &&
            Math.abs(this.nActiveSlide) > this.options.nSlideSimultaneously
        ) {
            this.toEnd();
            setTimeout(() => {
                this.prevSlide();
            }, 100);
            return;
        } else if ((!this.prevMirrored && this.nActiveSlide < 0) ||
         (this.isStart && !this.prevMirrored && this.nActiveSlide <= 0)
        ) {
            this.makeMirrored("start");
            this.prevMirrored = true;
            this.shift = this.slideWidth * this.options.nSlideSimultaneously + this.gap * this.options.nSlideSimultaneously;
            this.render(0.8);
            setTimeout(() => {
                this.prevSlide();
            }, 100);
            if (this.isStart) {
                this.isStart = false;
                this.nActiveSlide--;
            }
            return;
        } else {
            this.shift -= this.slideWidth + this.gap;
            this.nActiveSlide--;
        }
        this.render();
    }

    render(transition?: number): void {
        console.log("render", transition, Boolean(transition), this.shift);
        if (transition != undefined) {
            this.swiperBody.style.transition = `0s`;
            this.swiperBody.style.transform = `translate3d(-${this.shift}px, 0px, 0px)`;
            setTimeout(() => {
                this.swiperBody.style.transition = `all ${transition}s`;
            }, 50);
        } else {
            this.swiperBody.style.transform = `translate3d(-${this.shift}px, 0px, 0px)`;
        }
    }

    changeWidth(): void {
        console.log("change");
        this.swiper.style.width = `${this.options.parent.getBoundingClientRect().width}px`;
        this.setGap();
    }

    private setGap() {
        document.documentElement.style.setProperty(this.options.more.varGap, `${this.gap}px`);
    }
    private makeMirrored(where: "start" | "end") {
        if (where === "start") {
            const startPosition: number = this.slides.length - this.options.nSlideSimultaneously;
            const firstEl: HTMLElement = this.swiperBody.firstChild as HTMLElement;
            for (let i = startPosition; i < this.slides.length; i++) {
                const element: HTMLElement = this.slides[i];
                const clone: HTMLElement = element.cloneNode(true) as HTMLElement;
                clone.classList.add("mirrored", "mirrored_stat");
                this.swiperBody.insertBefore(clone, firstEl);
            }
        } else {
            for (let i = 0; i < this.options.nSlideSimultaneously; i++) {
                const element: HTMLElement = this.slides[i];
                const clone: HTMLElement = element.cloneNode(true) as HTMLElement;
                clone.classList.add("mirrored", "mirrored_end");
                this.swiperBody.appendChild(clone);
            }
        }
    }
    private deleteMirrored() {
        let mirrored: NodeListOf<HTMLElement> = this.swiperBody.querySelectorAll(".mirrored");
        [...mirrored].map((item) => item.remove())
    }
    private resetMirrored() {
        this.deleteMirrored();
        this.nextMirrored = false;
        this.prevMirrored = false;
    }
    private toStart() {
        this.shift = 0;
        this.nActiveSlide = 0;
        this.resetMirrored();
        this.render(0.8);
    }
    private toEnd() {
        const shiftWidth: number = ((this.slideWidth * (this.nSlides - 1)) - (this.slideWidth * (this.options.nSlideSimultaneously - 1)));
        const shiftGap: number =  ((this.gap * (this.nSlides - 1)) - (this.gap * (this.options.nSlideSimultaneously - 1)));
        this.shift = shiftWidth + shiftGap;
        this.nActiveSlide = this.nSlides - (this.options.nSlideSimultaneously + 1);
        this.resetMirrored();
        this.render(0.8);
    }
}

export function newTeamSwiper(swiper: HTMLElement, options: Options) {
    return new TeamSwiper(swiper, options);
}