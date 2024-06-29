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
    nextMirrored: boolean;
    nextMirrodedStep: number;
    prevMirrored: boolean;
    prevMirrodedStep: number;
    constructor(swiper: HTMLElement, options: Options) {
        super(swiper, options);
        this.swiperBody = swiper.querySelector("div[class$='body']");

        this.slideWidth = parseFloat(getComputedStyle(document.documentElement).getPropertyValue(this.options.more.varWidth));
        // TODO: возможно потребуется 2 вычета padding x2
        this.swiperWidth = this.swiper.getBoundingClientRect().width - (parseFloat(getComputedStyle(document.documentElement).getPropertyValue(this.options.more.varPadding)) * 2);
        // this.swiperWidth = this.swiper.getBoundingClientRect().width;
        this.gap = (this.swiperWidth - (this.slideWidth * this.options.nSlideSimultaneously)) / (this.options.nSlideSimultaneously - 1);

        // this.nFirstSide = 0;
        this.shift = 0;

        this.nextMirrored = false;
        this.nextMirrodedStep = 0;

        this.prevMirrored = false;
        this.prevMirrodedStep = 0;

        this.nextArrow = document.querySelector(`.${this.options.arrow.rightArrowClass}`);
        this.prevArrow = document.querySelector(`.${this.options.arrow.leftArrowClass}`);

        const self: TeamSwiper = this;
        this.nextArrow.addEventListener("click", self.nextSlide.bind(self));
        this.prevArrow.addEventListener("click", self.prevSlide.bind(self));

        this.setGap()
    }

    nextSlide(): void {
        if (this.prevMirrored) {
            this.prevMirrodedStep--;
        }
        if (this.nextMirrored) {
            console.log(this.nextMirrodedStep);
            
            if (this.nextMirrodedStep >= this.options.nSlideSimultaneously - 2) {
                console.log("ending");

                this.shift += this.slideWidth + this.gap;
                this.nActiveSlide++;
                this.nextMirrodedStep++;
                this.render();
                setTimeout(() => {
                    this.nextMirrored = false;
                    this.toStart();
                    this.render(0.8);
                }, 900)
            } else {
                this.shift += this.slideWidth + this.gap;
                this.nActiveSlide++;
                this.nextMirrodedStep++;
            }
        } else if (this.nActiveSlide + this.options.nSlideSimultaneously >= this.slides.length) {
            this.makeMirrored("end");
            this.nextMirrored = true;
            this.shift += this.slideWidth + this.gap;
            this.nActiveSlide++;
        } else {
            this.shift += this.slideWidth + this.gap;
            this.nActiveSlide++;
        }
        this.render();
    }
    prevSlide(): void {
        if (this.nextMirrored) {
            this.nextMirrodedStep--;
        }
        if (this.prevMirrored) {
            if (this.prevMirrodedStep >= this.options.nSlideSimultaneously - 2) {
                this.shift = (this.slideWidth * this.slides.length - 1) + ((this.gap *this.slides.length - 1) - this.gap);
                this.nActiveSlide = this.slides.length - 1;
                this.nextMirrodedStep++;
                this.render();
                setTimeout(() => {
                    this.nextMirrored = false;
                    this.toStart();
                    this.render(0.8);
                }, 900)
            } else {
                this.shift -= this.slideWidth + this.gap;
                this.nActiveSlide--;
                this.prevMirrodedStep++;
            }
        } else if (this.nActiveSlide == 0) {
            console.log("to end");
            this.swiperBody.style.transition = `0s`;
            this.makeMirrored("start");
            this.prevMirrored = true;
            this.shift = (this.slideWidth * 4) + (this.gap * 4);
            this.render();
            setTimeout(() => {
                this.swiperBody.style.transition = `0.8s`
                this.shift = (this.slideWidth * 3) + (this.gap * 3);
                this.render();
            }, 100)
            
            
            console.log(this.shift);
            
            this.nActiveSlide--;
        } else {
            this.shift -= this.slideWidth + this.gap;
            this.nActiveSlide--;
        }
        this.render();
    }

    render(transition?: number): void {
        console.log("render");
        
        if (transition) {
            this.swiperBody.style.transition = `0s`;
            this.swiperBody.style.transform = `translate3d(-${this.shift}px, 0px, 0px)`;
            setTimeout(() => {
                this.swiperBody.style.transition = `${transition}s`;
            }, 500);
        } else {
            this.swiperBody.style.transform = `translate3d(-${this.shift}px, 0px, 0px)`;
        }
    }

    changeWidth(): void {

    }

    private setGap() {
        document.documentElement.style.setProperty(this.options.more.varGap, `${this.gap}px`)
    }
    private makeMirrored(where: "start" | "end") {
        if (where === "start") {
            const reversedSlides: NodeListOf<HTMLElement> = [...this.slides].reverse() as unknown as NodeListOf<HTMLElement>;
            const firstEl = this.swiperBody.firstChild
            for (let i = 0; i < this.options.nSlideSimultaneously; i++) {
                const element: HTMLElement = reversedSlides[i];
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
    private toStart() {
        this.shift = 0;
        this.nActiveSlide = 0;
        this.nextMirrodedStep = 0;
        this.deleteMirrored()
    }
}

export function newTeamSwiper(swiper: HTMLElement, options: Options) {
    return new TeamSwiper(swiper, options);
}