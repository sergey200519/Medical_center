import { Modal } from "./modal.min.js";
class AppointmentModal extends Modal {
    constructor(modal, options) {
        super(modal, options);
    }
    open(event) {
        event.preventDefault();
        if (this.options.more.specialistName != null) {
            this.modal.querySelector("input[name=\'doctor_name\']").value = this.options.more.specialistName;
        }
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
        this.modal.querySelector("input[name=\'doctor_name\']").value = "";
    }
}
export function newAppointmentModal(modal, options) {
    return new AppointmentModal(modal, options);
}
