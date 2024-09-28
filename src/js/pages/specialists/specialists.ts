
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


    [...document.querySelectorAll(".specialists_list_item")].forEach((specialistCard: HTMLDivElement) => {
        specialistCard.addEventListener("click", (e) => {
            e.preventDefault();

            const btn: HTMLButtonElement = specialistCard.querySelector(".appointment_btn-specialist");
            // console.log(e.target, btn);
            if (e.target != btn) {
                window.location.href = `${window.location.href.replace("/specialists.html", "")}/components/pages/${specialistCard.getAttribute("data-page")}.html`;
            }

        })
    })

    // setTimeout(() => {
    //     window.location.href = `${window.location.href.replace("/specialists.html", "")}/components/pages/makova.html`
    // }, 3000);
    

    // newServices(document.querySelector(".services_wrap"), {
    //     "classActivator": "active",
    //     "tegAccordionItems": "li"
    // });
});