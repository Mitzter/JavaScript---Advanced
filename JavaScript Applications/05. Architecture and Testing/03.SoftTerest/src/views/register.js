import {register} from `../api/user`

const section = document.getElementById("registerView");
const form = section.querySelector("form");
form.addEventListener("submit", onSubmit);

let ctx = null;
export function showRegister(context){
    ctx = context;
    context.showSection(section);
}

async function onSubmit(e){
    e.preventDefault();
    
    const formData = new FormData(form);

    const {email, password, repeatPassword} = Object.fromEntries(formData);

    if(password !== repeatPassword){
        alert("password does not match");
    } else {
        await register(email,password);
        ctx.goTo("/")
    }
}