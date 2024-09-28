const REVIEWS_URL = "https://sergey200519-medical-center-backend-flask-06b4.twc1.net/reviews/";
fetch(REVIEWS_URL, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
})
    .then(response => {
    if (!response.ok) {
        throw new Error('Ошибка запроса');
    }
    return response.json();
})
    .then(data => {
    console.log(data);
    renderReviews(data);
})
    .catch(error => {
    console.log(error);
});
function renderReviews(reviews) {
    const reviewsBox = document.querySelector(".reviews_list");
    reviewsBox.innerHTML = "";
    let reviewsHtml = "";
    reviews.forEach((review) => {
        reviewsHtml += `<div class="reviews_review review">
    <div class="review_header">
        <h3>${review.author}</h3>
    </div>
    <p class="review_text">${review.text}</p>
</div>`;
    });
    reviewsBox.innerHTML = reviewsHtml;
}
const nameInput = document.querySelector(".comments-form_form_inputs_name");
const textTextarea = document.querySelector("body > div.wrapper > main > div > div > div > section.comments-form > form > div > textarea");
const btn = document.querySelector("body > div.wrapper > main > div > div > div > section.comments-form > form > input");
const form = document.querySelector(".comments-form_form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(REVIEWS_URL, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            author: nameInput.value,
            text: textTextarea.value
        })
    })
        .then(response => {
        fetch(REVIEWS_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка запроса');
            }
            return response.json();
        })
            .then(data => {
            renderReviews(data);
            nameInput.value = "";
            textTextarea.value = "";
            alert("Отзыв отправлен");
        })
            .catch(error => {
            console.log(error);
        });
        return response.json();
    })
        .then(data => {
        console.log("tyt");
        renderReviews(data);
    });
});
