class MobileMenu {
    constructor(options) {
        this.btnOpen = options.btnOpen;
        this.btnClose = options.btnClose;
        this.mobileMenu = options.mobileMenu;
        this.mobileMenuBody = this.mobileMenu.querySelector("div[class$='body']");
        this.classHide = options.classHide;
        const self = this;
        this.btnOpen.addEventListener("click", self.open.bind(self));
        this.btnClose.addEventListener("click", self.close.bind(self));
    }
    open() {
        this.mobileMenu.classList.remove(this.classHide);
        setTimeout(() => {
            this.mobileMenuBody.style.left = `0px`;
        }, 100);
    }
    close() {
        this.mobileMenuBody.style.left = `-${this.mobileMenuBody.getBoundingClientRect().width}px`;
        setTimeout(() => {
            this.mobileMenu.classList.add(this.classHide);
            ;
        }, 800);
    }
}
export function newMobileMenu(options) {
    return new MobileMenu(options);
}
