export class Modal {
    constructor(modal, options) {
        this.modal = modal;
        this.modalBody = modal.querySelector(":scope > div[class$='body']");
        this.options = options;
        const self = this;
        this.options.btnOpen.addEventListener("click", self.open.bind(self));
        this.options.btnClose.addEventListener("click", self.close.bind(self));
    }
}
