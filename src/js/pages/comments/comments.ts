type Review = {
    id: number;
    author: string;
    text: string;
}

fetch("http://127.0.0.1:10000/reviews/", {
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

function renderReviews(reviews: Review[]) {
    const reviewsBox: HTMLDivElement = document.querySelector(".reviews_list");
    reviewsBox.innerHTML = "";
    let reviewsHtml: string = "";
    reviews.forEach((review: Review) => {
        reviewsHtml += `<div class="reviews_review review">
    <div class="review_header">
        <h3>${review.author}</h3>
    </div>
    <p class="review_text">${review.text}</p>
</div>`
    })
    reviewsBox.innerHTML = reviewsHtml;
}


const nameInput: HTMLInputElement = document.querySelector(".comments-form_form_inputs_name");
const textTextarea: HTMLTextAreaElement = document.querySelector("body > div.wrapper > main > div > div > div > section.comments-form > form > div > textarea");
const btn: HTMLButtonElement = document.querySelector("body > div.wrapper > main > div > div > div > section.comments-form > form > input");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    fetch('http://127.0.0.1:10000/reviews/', {
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
            return response.json();
        })
        .then(data => {
            renderReviews(data);
        })
})