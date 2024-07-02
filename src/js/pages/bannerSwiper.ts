import { SwiperBase, Options } from "../modules/swiperBase.js";

class BannerSwiper extends SwiperBase {
    private swiperBody: HTMLElement;
    constructor(swiper: HTMLElement, options: Options) {
        super(swiper, options);
        this.swiperBody = swiper.querySelector("div[class$='body']");
        console.log("tyt");
        this.setHeightBody();

        const self: BannerSwiper = this;
        [...this.swiperPaginationItems].map((item) => item.addEventListener("click", self.clickNavigation.bind(self)));

        window.addEventListener("resize", self.changeWidth.bind(self));
    }

    setHeightBody() {
        console.log("set");
        if (this.swiperBody == undefined) {
            this.swiperBody = this.swiper.querySelector("div[class$='body']");
        }
        setTimeout(() => {
            this.swiperBody.style.height = `${this.activeSlide.getBoundingClientRect().height}px`;
        }, 5000);
    }

    nextSlide() {
        if (this.nActiveSlide + 1 >= this.slides.length) {
            this.render(0)
        } else {
            this.render(this.nActiveSlide + 1);
        }
    }

    render(nSlide?: number): void {
        [...this.slides].map((item) => item.classList.remove("active"));
        this.activeSlide = this.slides[nSlide];
        this.activeSlide.classList.add("active");

        [...this.swiperPaginationItems].map((item) => item.classList.remove("active"));
        this.swiperPaginationItemActive = this.swiperPaginationItems[nSlide];
        this.swiperPaginationItemActive.classList.add("active");

        this.nActiveSlide = nSlide; 
    }

    clickNavigation(e: Event) {
        function findEl(element: HTMLElement, index: number, array: any) {
            const el = e.target
            return element === el
        }
        this.render([...this.swiperPaginationItems].findIndex(findEl));
    }
    changeWidth(): void {
        this.setHeightBody();
    }
}

export function newBannerSwiper(swiper: HTMLElement, options: Options) {
    return new BannerSwiper(swiper, options);
}