import { getAllIdea } from "../api/data.js";

const section = document.getElementById("dashboard-holder");


export async function showCatalog(context){
    context.showSection(section);
    
    const ideas = await getAllIdea();

    if(ideas.length === 0){
        section.innerHTML = `<h1>No ideas yet! Be the first one :)</h1>`
    } else {
        section.replaceChildren(...ideas.map(createIdea))
    }
}

function createIdea(idea){
    const div = document.createElement("div");
    div.classList = "card overflow-hidden current-card details";
    div.style.width = "20rem";
    div.style.height = "18rem";

    div.innerHTML = `
        <div class="card-body">
            <p class="card-text">${idea.title}</p>
        </div>
            <img class="card-image" src="${idea.img}" alt="Card image cap">
            <a class="btn" href="">/details</a>
    `

    return div
}