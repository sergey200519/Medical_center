import { newCommentStars } from "./modules/commentStars.js";


document.querySelectorAll(".review").forEach((review: HTMLElement) => {
    newCommentStars(review.querySelector(".review_header_stars"), {
        "classActive": "active",
        "classNotActive": "grey",
        "attribute": "data-review_stars_n"
    })
});