import { Modal } from "./modal.min.js";
class AppointmentModal extends Modal {
    constructor(modal, options) {
        super(modal, options);
    }
    open(event) {
        event.preventDefault();
        this.modal.classList.remove(this.options.classHide);
        setTimeout(() => {
            this.modalBody.classList.add(this.options.more.bodyOpenClass);
        }, 100);
    }
    close() {
        this.modalBody.classList.remove(this.options.more.bodyOpenClass);
        setTimeout(() => {
            this.modal.classList.add(this.options.classHide);
        }, 300);
    }
}
export function newAppointmentModal(modal, options) {
    return new AppointmentModal(modal, options);
}
