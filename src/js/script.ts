import { newAside } from "./modules/aside.js";
import { newMobileMenu } from "./modules/mobileMenu.js";

document.addEventListener("DOMContentLoaded", () => {
    newAside(document.querySelector(".asidemenu_menu"));
    newMobileMenu({
        "btnOpen": document.querySelector(".topheader_mobile"),
        "btnClose": document.querySelector(".mobile_body_clouse"),
        "mobileMenu": document.querySelector(".mobile"),
        "classHide": "none"
    })
});