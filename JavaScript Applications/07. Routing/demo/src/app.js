

const views = {
    '/http://127.0.0.1:5500/JavaScript%20Applications/07.%20Routing/demo/':() => '<h2>Home Page</h2>',
    'http://127.0.0.1:5500/JavaScript%20Applications/07.%20Routing/demo/catalog':() =>  '<h2>Catalog</h2>',
    'http://127.0.0.1:5500/JavaScript%20Applications/07.%20Routing/demo/about':() =>  '<h2>About Page</h2>'
}

const main = document.querySelector('main');
document.querySelector('nav').addEventListener('click', onNavigate)


function onNavigate(event){
    if(event.target.tagName == 'A'){
        const url = new URL(event.target.href);
        const view = views[url.pathname];
        if(showView(url.pathname)){
            event.preventDefault();
            main.innerHTML = view();
            history.pushState(null, '', url.pathNAME)
        }
    } 
}

function showView(name){
    const view = views[name];
    if(typeof view == 'function'){
        main.innerHTML = view();
        return true
    } else {
        return false;
    }
    
}