class CommentStars {
    constructor(starsWrap, options) {
        this.starsWrap = starsWrap;
        this.options = options;
        this.stars = this.starsWrap.querySelectorAll("svg");
        this.setStars();
    }
    setStars() {
        const starsN = parseInt(this.starsWrap.getAttribute(this.options.attribute));
        let i = 0;
        this.stars.forEach((star) => {
            if (i < starsN) {
                star.classList.add(this.options.classActive);
            }
            else {
                star.classList.add(this.options.classNotActive);
            }
            i++;
        });
    }
}
export function newCommentStars(starsWrap, options) {
    return new CommentStars(starsWrap, options);
}
