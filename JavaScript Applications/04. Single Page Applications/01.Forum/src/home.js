import { showDetails } from './details.js'
const url = "http://localhost:3030/jsonstore/collections/myboard/posts";
const section = document.getElementById("homeView");
const main = document.getElementsByTagName("main")[0];
const form = document.querySelector("#homeView form");
form.addEventListener("submit", onSubmit);

section.remove();

export async function showHome() {
    const topicContainer = section.querySelector(".topic-title");
    const posts = await loadPost();
    const content = Object.values(posts).map(x=> topicTemplate(x));
    topicContainer.replaceChildren(...content);
    

    main.replaceChildren(section);

}



function topicTemplate(data) {
    const container = document.createElement("div");
    container.classList.add("topic-container");
    container.innerHTML = `
    <div class="topic-name-wrapper">
        <div class="topic-name">
            <a href="#" class="normal">
                <h2>${data.topicName}</h2>
            </a>
            <div class="columns">
                <div>
                    <p>Date: <time>${data.date}</time></p>
                    <div class="nick-name">
                        <p>Username: <span>${data.username}</span></p>
                    </div>
                </div>


            </div>
        </div>
    </div>
    `;

    container.querySelector("a").addEventListener("click", showDetails);
    return container;
}

function onSubmit(e) {
    //e.preventDefault();

    if (e.submitter.innerHTML === "Cancel") {
        clearForm();
    }

    const formData = new FormData(form);
    const { topicName, username, postText } = Object.fromEntries(formData);

    createPost({ topicName, username, postText, date: new Date() });

    clearForm();
}

function clearForm() {
    form.reset();
}

async function createPost(body) {


    const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
    })

    const data = await response.json();
    return data;
}

async function loadPost() {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}


showDetails()