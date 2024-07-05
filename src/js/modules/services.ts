import { AccordionBase, Options } from "./accordionBase.js";


class Services extends AccordionBase {

    constructor(accordion: HTMLElement, options: Options) {
        super(accordion, options);

        console.log("hi");
    }


    render(event: Event): void {
        event.preventDefault();
        const element: HTMLElement = event.target as HTMLElement;

        let parentElement: HTMLElement;
        if (element.tagName.toLowerCase() == this.options.tegAccordionItems.toLowerCase()) {
            parentElement = element;
        } else {
            parentElement = element.closest(this.options.tegAccordionItems);
        }

        parentElement.classList.add("active");
    }
}


export function newServices(accordion: HTMLElement, options: Options): Services {
    return new Services(accordion, options);
}