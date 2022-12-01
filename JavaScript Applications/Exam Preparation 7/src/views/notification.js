import { html } from "../lib.js";
const main = document.getElementById('content')

const notificationTemplate = (errorMessage) => html`
        <section id="notifications">
        <div id="errorBox" class="notification">
            <span>${errorMessage}</span>
        </div>
        </section>`

export function showNotification(params) {
    const errorMessage = params;
    return main.appendChild(notificationTemplate(errorMessage));
}