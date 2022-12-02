import { searchCar } from "../api/data.js";
import { html } from "../lib.js";

const searchTemplate = (onSearch) => html`
<section id="search-cars">
            <h1>Filter by year</h1>

            <div class="container">
                <input id="search-input" type="text" name="search" placeholder="Enter desired production year">
                <button @click=${onSearch} class="button-list">Search</button>
            </div>

            
        </section>
`;

const carTemplate=(result)=>html`
    <div class="listing">
                    <div class="preview">
                        <img src=${result.imageUrl}>
                    </div>
                    <h2>${result.brand} ${result.model}</h2>
                    <div class="info">
                        <div class="data-info">
                            <h3>Year: ${result.year}</h3>
                            <h3>Price: ${result.price} $</h3>
                        </div>
                        <div class="data-buttons">
                            <a href="/catalog/${result._id}" class="button-carDetails">Details</a>
                        </div>
                    </div>
                </div>
`

export async function showSearch(ctx){
    ctx.render(searchTemplate(onSearch))

    async function onSearch(){
        const inputArea = document.getElementById('search-input');
        const section = document.getElementById(`search-cars`)
        const query = inputArea.value;

        const results = await searchCar(query);
        const returnHtml = (onSearch, results) => html`
        <section id="search-cars">
                <h1>Filter by year</h1>
    
                <div class="container">
                    <input id="search-input" type="text" name="search" placeholder="Enter desired production year">
                    <button @click=${onSearch} class="button-list">Search</button>
                </div>
                <div class="listings">
                
                ${results.length == 0 ? html`
                <p class="no-cars"> No results.</p>
                `: results.map(carTemplate)}
                
            </div>
                
            </section>
    `
       return ctx.render(returnHtml(onSearch, results));
       
        
    }
}