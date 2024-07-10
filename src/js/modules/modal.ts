export type Options = {
    btnOpen: HTMLElement;
    btnClose: HTMLElement;
    classHide: string;

    more?: {
        [key: string]: string;
    };
}

export abstract class Modal {
    modal: HTMLElement;
    options: Options;
    modalBody: HTMLElement;

    abstract open(event: Event): void;
    abstract close(): void;
    constructor(modal: HTMLElement, options: Options) {
        this.modal = modal;
        this.modalBody = modal.querySelector(":scope > div[class$='body']");
        this.options = options;

        const self = this;
        this.options.btnOpen.addEventListener("click", self.open.bind(self));
        this.options.btnClose.addEventListener("click", self.close.bind(self));
    }
}