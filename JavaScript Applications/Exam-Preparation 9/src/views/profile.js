import { getMyPosts } from "../api/data.js";
import { html } from "../lib.js";

const profileTemplate = (userRecords) => html`
<section id="my-listings">
            <h1>My car listings</h1>
            <div class="listings">

                <!-- Display all records -->
                ${userRecords.length == 0? html`
                <p class="no-cars"> You haven't listed any cars yet.</p> 
                ` : userRecords.map(carCardTemplate)}

                <!-- Display if there are no records -->
                
            </div>
        </section>
`;

const carCardTemplate = (car) => html`
<div class="listing">
                    <div class="preview">
                        <img src=${car.imageUrl}>
                    </div>
                    <h2>${car.brand} ${car.model}</h2>
                    <div class="info">
                        <div class="data-info">
                            <h3>Year: ${car.year}</h3>
                            <h3>Price: ${car.price} $</h3>
                        </div>
                        <div class="data-buttons">
                            <a href="/catalog/${car._id}" class="button-carDetails">Details</a>
                        </div>
                    </div>
                </div>
`;

export async function showProfile(ctx){
    const id = ctx.user._id;
    const userRecords = await getMyPosts(id);

    ctx.render(profileTemplate(userRecords));
}