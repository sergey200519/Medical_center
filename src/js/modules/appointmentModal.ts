import { Modal, Options } from "./modal.js";

class AppointmentModal extends Modal {
    constructor(modal: HTMLElement, options: Options) {
        super(modal, options);
    }

    open(event: Event): void {
        event.preventDefault();

        if (this.options.more.specialistName != null) {
            (this.modal.querySelector("input[name=\'doctor_name\']") as HTMLInputElement).value = this.options.more.specialistName
        }

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

        
        (this.modal.querySelector("input[name=\'doctor_name\']") as HTMLInputElement).value = ""
        
    }
}


export function newAppointmentModal(modal: HTMLElement, options: Options) {
    return new AppointmentModal(modal, options);
}
