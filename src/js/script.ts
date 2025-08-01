import { newAside } from "./modules/aside.js";
import { newMobileMenu } from "./modules/mobileMenu.js";
import { newAppointmentModal } from "./modules/appointmentModal.js";
// import { newServices } from "./modules/services.js";

document.addEventListener("DOMContentLoaded", () => {
    newAside(document.querySelector(".asidemenu_menu"));
    
    newMobileMenu({
        "btnOpen": document.querySelector(".topheader_mobile"),
        "btnClose": document.querySelector(".mobile_body_clouse"),
        "mobileMenu": document.querySelector(".mobile"),
        "classHide": "none"
    });

    const appointmentModal = document.querySelector(".appointment_modal") as HTMLElement;
    [...document.querySelectorAll(".appointment_btn")].forEach((btn: HTMLHtmlElement) => {
        newAppointmentModal(appointmentModal, {
            "btnOpen": btn,
            "btnClose": appointmentModal.querySelector(".appointment_modal_body_clouse"),
            "classHide": "none",
            "more": {
                "bodyOpenClass": "open"
            }
        });
    });
    

    // newServices(document.querySelector(".services_wrap"), {
    //     "classActivator": "active",
    //     "tegAccordionItems": "li"
    // });
});