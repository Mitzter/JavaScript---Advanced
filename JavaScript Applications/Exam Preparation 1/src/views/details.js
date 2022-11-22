import { deleteById, getById } from '../api/data.js';
import { donate, getDonations, getOwnDonation } from '../api/donations.js';
import { html, nothing } from '../lib.js'

const detailsTemplate = (pet,donations, hasUser, canDonate, isOwner, onDelete, onLike) => html`
<section id="detailsPage">
    <div class="details">
        <div class="animalPic">
            <img src=${pet.image}>
        </div>
        <div>
            <div class="animalInfo">
                <h1>Name: ${pet.name}</h1>
                <h3>Breed: ${pet.breed}</h3>
                <h4>Age: ${pet.age}</h4>
                <h4>Weight: ${pet.weight}</h4>
                <h4 class="donation">Donation: ${donations * 100}</h4>
            </div>
            ${petControls(pet, hasUser, canDonate, isOwner, onDelete, onLike)}

        </div>
    </div>
</section>
`;
/* ${hasUser ? html`
<!-- if there is no registered user, do not display div-->
<div class="actionBtn">
    ${isOwner ? html`
    <!-- Only for registered user and creator of the pets-->
    <a href="/edit/${pet._id}" class="edit">Edit</a>
    <a href="javascript:void(0)" class="remove">Delete</a>` :
             html`<a href="#" class="donate">Donate</a>`}



</div>` : nothing}  */
function petControls(pet, hasUser, canDonate, isOwner, onDelete, onLike) {
    if (hasUser == false) {
        return nothing;
    }
    if (canDonate) {
        return html`
        <div class="actionBtn">
        
            <a @click=${onLike} href="javascript:void(0)" class="donate">Donate</a>
        </div>`;
    }
    if(isOwner){
        return html`
            <!-- if there is no registered user, do not display div-->
            <div class="actionBtn">
                
                <!-- Only for registered user and creator of the pets-->
                <a href="/edit/${pet._id}" class="edit">Edit</a>
                <a @click = ${onDelete} href="javascript:void(0)" class="remove">Delete</a>
                         



            </div>`
    }
}

export async function showDetails(ctx) {
    const id = ctx.params.id;
    
    

    const requests = [
        getById(id),
        getDonations(id),
    ]

    const hasUser = !!ctx.user; // !! - boolean
    
    if(hasUser) {
        request.push(getOwnDonation(id, ctx.user._id));
    }
    const isOwner = hasUser && ctx.user._id == pet._ownerId;
    const canDonate = !isOwner && hasDonation == 0;

    const[pet, donations, hasDonation] = await Promise.all(requests);
    ctx.render(detailsTemplate(pet,donations,  hasUser, canDonate, isOwner, onDelete, onLike));

    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this pet?');

        if (choice) {
            await deleteById(id);
            ctx.page.redirect('/');
        }
    }

    async function onLike(){
        await donate(id);
        ctx.page.redirect('/catalog/' + id);
    }
}