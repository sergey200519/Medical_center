import { newAside } from "./modules/aside.min.js";
import { newMobileMenu } from "./modules/mobileMenu.min.js";
import { newAppointmentModal } from "./modules/appointmentModal.min.js";
// import { newServices } from "./modules/services.min.js";
document.addEventListener("DOMContentLoaded", () => {
    newAside(document.querySelector(".asidemenu_menu"));
    newMobileMenu({
        "btnOpen": document.querySelector(".topheader_mobile"),
        "btnClose": document.querySelector(".mobile_body_clouse"),
        "mobileMenu": document.querySelector(".mobile"),
        "classHide": "none"
    });
    const appointmentModal = document.querySelector(".appointment_modal");
    [...document.querySelectorAll(".appointment_btn")].forEach((btn) => {
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
