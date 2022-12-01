import { html } from "../lib.js";
import { register } from "../api/user.js";
import { createSubmitHandler } from "../util.js";

const registerTemplate = (onRegister) => html`
<section id="register-page" class="register">
            <form @submit= ${onRegister}id="register-form" action="" method="">
                <fieldset>
                    <legend>Register Form</legend>
                    <p class="field">
                        <label for="email">Email</label>
                        <span class="input">
                            <input type="text" name="email" id="email" placeholder="Email">
                        </span>
                    </p>
                    <p class="field">
                        <label for="password">Password</label>
                        <span class="input">
                            <input type="password" name="password" id="password" placeholder="Password">
                        </span>
                    </p>
                    <p class="field">
                        <label for="repeat-pass">Repeat Password</label>
                        <span class="input">
                            <input type="password" name="confirmPassword" id="repeat-pass" placeholder="Repeat Password">
                        </span>
                    </p>
                    <input class="button submit" type="submit" value="Register">
                </fieldset>
            </form>
        </section>
`;

export function showRegister(ctx){

    ctx.render(registerTemplate(createSubmitHandler(onRegister)));

    async function onRegister({email, password, confirmPassword}){
        if(email == '' || password == ''){
            return alert('All fields are required!');
        }
        if(password != confirmPassword){
            return alert('Passwords don\'t match!');
        }

        await register(email, password);
        ctx.updateNav();
        ctx.page.redirect('/catalog');
    }
}