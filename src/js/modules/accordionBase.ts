export type Options = {
    classActivator: string;
    tegAccordionItems: string;
}

interface IAccordionBase {
    render(event: Event): void;
}

export abstract class AccordionBase implements IAccordionBase {
    accordion: HTMLElement;
    options: Options;
    accordionItems: NodeListOf<HTMLElement>;

    abstract render(event: Event): void;
    constructor(accordion: HTMLElement, options: Options) {
        this.accordion = accordion;
        this.options = options;


        this.accordionItems = this.accordion.querySelectorAll(`${this.options.tegAccordionItems}`);


        const self = this;
        [...this.accordionItems].map(item => item.addEventListener("click", self.render.bind(self)));
    }

    // render(event: Event): void {
    //     event.preventDefault();
    //     const element = event.target;
    // }
}