import { Modal, Options } from "./modal.js";

class AppointmentModal extends Modal {
    constructor(modal: HTMLElement, options: Options) {
        super(modal, options);
    }

    open(event: Event): void {
        event.preventDefault();
        this.modal.classList.remove(this.options.classHide);
        setTimeout(() => {
            this.modalBody.classList.add(this.options.more.bodyOpenClass);
        }, 100);
    }
    close(): void {
        this.modalBody.classList.remove(this.options.more.bodyOpenClass);
        setTimeout(() => {
            this.modal.classList.add(this.options.classHide);
        }, 300);
    }
}


export function newAppointmentModal(modal: HTMLElement, options: Options) {
    return new AppointmentModal(modal, options);
}
