import { AccordionBase } from "./accordionBase.min.js";
class Services extends AccordionBase {
    constructor(accordion, options) {
        super(accordion, options);
        console.log("hi");
    }
    render(event) {
        event.preventDefault();
        const element = event.target;
        let parentElement;
        if (element.tagName.toLowerCase() == this.options.tegAccordionItems.toLowerCase()) {
            parentElement = element;
        }
        else {
            parentElement = element.closest(this.options.tegAccordionItems);
        }
        parentElement.classList.add("active");
    }
}
export function newServices(accordion, options) {
    return new Services(accordion, options);
}
