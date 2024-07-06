type Options = {
    classActive: string;
    classNotActive: string;
    attribute: string;
}

class CommentStars {
    starsWrap: HTMLElement;
    stars: NodeListOf<HTMLElement & SVGElement>;
    options: Options;
    constructor(starsWrap: HTMLElement, options: Options) {
        this.starsWrap = starsWrap;
        this.options = options

        this.stars = this.starsWrap.querySelectorAll("svg") as unknown as NodeListOf<HTMLElement & SVGElement>;

        this.setStars();
    }
    setStars() {
        const starsN: number = parseInt(this.starsWrap.getAttribute(this.options.attribute));
        let i: number = 0;
        this.stars.forEach((star: HTMLElement) => {
            if (i < starsN) {
                star.classList.add(this.options.classActive);
            } else {
                star.classList.add(this.options.classNotActive);
            }
            i++;
        });
    }
}

export function newCommentStars(starsWrap: HTMLElement, options: Options) {
    return new CommentStars(starsWrap, options)
}