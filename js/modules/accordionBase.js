export class AccordionBase {
    constructor(accordion, options) {
        this.accordion = accordion;
        this.options = options;
        this.accordionItems = this.accordion.querySelectorAll(`${this.options.tegAccordionItems}`);
        const self = this;
        [...this.accordionItems].map(item => item.addEventListener("click", self.render.bind(self)));
    }
}
