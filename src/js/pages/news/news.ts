import { news } from "./components/newsList.js";
console.log("hi");

var newBox: HTMLElement = document.querySelector(".news-list_list");
var newsModal: HTMLElement = document.querySelector(".news-modal")

var code = ``;

type NewT = {
    name: string;
    news: string
};

for (const [key, value] of Object.entries(news)) {
    console.log(key, value);
    code += `<li class="news-list_list_item" data-new-id="${key}">
                <a href="">
                    <time datetime="2023-12-22">22.12.2023</time>
                    <h3>${value.name}</h3>
                </a>
            </li>`;
}

newBox.innerHTML = code;

document.querySelectorAll(".news-list_list_item").forEach(el => {
    el.addEventListener("click", openNew);
});


function openNew(event: Event) {
    event.preventDefault();
    var element: HTMLLIElement = (event.target as HTMLLIElement).closest(".news-list_list_item");
    var id = element.getAttribute("data-new-id");
    console.log(news[id], element);
    openModal({
        "name": news[id]["name"],
        "news": news[id]["news"]
    })
}

function openModal(data: NewT) {
    document.querySelector(".news-modal_body_title").textContent = data.name
    document.querySelector(".news-modal_body_text").textContent = data.news
    newsModal.classList.remove("none");
    newsModal.classList.add("open");
}

function clouseModal() {
    newsModal.classList.add("none");
    newsModal.classList.remove("open");
}

(document.querySelector(".news-modal_body_clouse") as HTMLElement).addEventListener("click", clouseModal);