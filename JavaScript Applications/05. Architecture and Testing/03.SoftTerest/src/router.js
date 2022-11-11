

export function initialize (links){
    const main = document.getElementById('mainView');
    document.querySelector("nav").addEventListener("click", onNavigate);

    const context = {
        showSection,
        goTo
    }

    return context

    function showSection(section){
        main.replaceChildren(section);
    }
    function onNavigate(e){
        e.preventDefault();
        let target = e.target;
        if(target.tagName == "IMG"){
            target = target.parentElement;
        }
        if (target.tagName === "A"){
            const url = new URL(target.href);
            goTo(url.pathname);
        }
        
    }
    function goTo(name){
        const handler = links[name];
        if (typeof(handler) === "function"){
            handler(context)
        }
    }

    function updateNavigate(){
        const user = JSON.stringify(sessionStorage.getItem("user"))

        if(user){
            document.querySelectorAll("a .user").forEach(e => e.style.display = "block")
            document.querySelecotrAll("a .guest").forEach(e => e.style.display)
        }
    }
    
}