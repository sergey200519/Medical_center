import { newAside } from "./modules/aside.js";
import { newMobileMenu } from "./modules/mobileMenu.js";
import { newServices } from "./modules/services.js";

document.addEventListener("DOMContentLoaded", () => {
    newAside(document.querySelector(".asidemenu_menu"));
    
    newMobileMenu({
        "btnOpen": document.querySelector(".topheader_mobile"),
        "btnClose": document.querySelector(".mobile_body_clouse"),
        "mobileMenu": document.querySelector(".mobile"),
        "classHide": "none"
    });

    // newServices(document.querySelector(".services_wrap"), {
    //     "classActivator": "active",
    //     "tegAccordionItems": "li"
    // });
});