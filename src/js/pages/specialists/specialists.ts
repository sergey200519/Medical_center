
import { newAppointmentModal } from "../../modules/appointmentModal.js";


document.addEventListener("DOMContentLoaded", () => {

    const appointmentModal = document.querySelector(".appointment_modal") as HTMLElement;
    [...document.querySelectorAll(".specialists .appointment_btn-specialist")].forEach((btn: HTMLHtmlElement) => {
        const specialistName = btn.getAttribute("data-specialist");
        newAppointmentModal(appointmentModal, {
            "btnOpen": btn,
            "btnClose": appointmentModal.querySelector(".appointment_modal_body_clouse"),
            "classHide": "none",
            "more": {
                "bodyOpenClass": "open",
                "specialistName": specialistName
            }
        });
    });
    

    // newServices(document.querySelector(".services_wrap"), {
    //     "classActivator": "active",
    //     "tegAccordionItems": "li"
    // });
});