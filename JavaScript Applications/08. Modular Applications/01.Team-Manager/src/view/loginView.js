import { html } from "../../node_modules/lit-html/lit-html.js";
import { login } from "../api/data.js"

let context = null;
export async function loginView(ctx){
    context = ctx;
    ctx.render(createLoginTemplate());
}

async function onSubmit(e){
    e.preventDefault();
    const formData = new FormData(e.target);
    const {email, password} = Object.fromEntries(formData);
    debugger
    try{
        await login(email,password);
        context.updateNav();
        context.page.redirect("/");
        
        
    } catch(e){
        return context.render(createLoginTemplate(e.message))
    }
    await login(email, password);
    context.page.redirect("/");
}


function createLoginTemplate(msg){
    return html`
    <section id="login">
                <article class="narrow">
                    <header class="pad-med">
                        <h1>Login</h1>
                    </header>
                    <form @submit= ${onSubmit} id="login-form" class="main-form pad-large">
                        ${msg? html`<div class="error">${msg}</div>` : ""}
                        <label>E-mail: <input type="text" name="email"></label>
                        <label>Password: <input type="password" name="password"></label>
                        <input class="action cta" type="submit" value="Sign In">
                    </form>
                    <footer class="pad-small">Don't have an account? <a href="#" class="invert">Sign up here</a>
                    </footer>
                </article>
            </section>`
}
