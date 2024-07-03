type Options = {
    btnOpen: HTMLElement;
    btnClose: HTMLElement;
    mobileMenu: HTMLElement;
    classHide: string;
}

class MobileMenu {
    btnOpen: HTMLElement;
    btnClose: HTMLElement;
    mobileMenu: HTMLElement;
    mobileMenuBody: HTMLElement;
    classHide: string;
    constructor(options: Options) {
        this.btnOpen = options.btnOpen;
        this.btnClose = options.btnClose;
        this.mobileMenu = options.mobileMenu;
        this.mobileMenuBody = this.mobileMenu.querySelector("div[class$='body']");
        this.classHide = options.classHide;

        const self = this;
        this.btnOpen.addEventListener("click", self.open.bind(self));
        this.btnClose.addEventListener("click", self.close.bind(self));
    }

    open(): void {
        this.mobileMenu.classList.remove(this.classHide);
        setTimeout(() => {
            this.mobileMenuBody.style.left = `0px`;
        }, 100)
    }

    close(): void {
        this.mobileMenuBody.style.left = `-${this.mobileMenuBody.getBoundingClientRect().width}px`;
        setTimeout(() => {
            this.mobileMenu.classList.add(this.classHide);;
        }, 800)
    }
}

export function newMobileMenu(options: Options) {
    return new MobileMenu(options);
}