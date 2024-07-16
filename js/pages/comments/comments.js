import { newCommentStars } from "./modules/commentStars.min.js";
document.querySelectorAll(".review").forEach((review) => {
    newCommentStars(review.querySelector(".review_header_stars"), {
        "classActive": "active",
        "classNotActive": "grey",
        "attribute": "data-review_stars_n"
    });
});
