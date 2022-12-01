import { page, render} from './lib.js';
import { getUserData } from './util.js';
import { showCatalog } from './views/catalog.js';
import { showCreate } from './views/create.js';
import { showDetails } from './views/details.js';
import { showEdit } from './views/edit.js';
import { showHome } from './views/home.js';
import { showLogin } from './views/login.js';
import { showProfile } from './views/myMemes.js';
import { updateNav } from './views/nav.js';
import { showRegister } from './views/register.js';


const main = document.getElementById('content');
const notification = document.getElementsByClassName('notification')[0];
const errorBox = document.getElementById('errorBox');



page(decorateContext)
page('/', showHome);
page('/catalog', showCatalog);
page('/profile', showProfile);
page('/login', showLogin);
page('/register', showRegister);
page('/catalog/:id',  showDetails)
page('/create', showCreate)
page('/edit/:id', showEdit)

updateNav()
page.start()


function decorateContext(ctx, next){
    ctx.render = renderMain;
    ctx.updateNav = updateNav;
    notification.style.display = "none";
        const user = getUserData();
        if(user){
        ctx.user = user;
        }
        next();
    
    
}

function renderMain(content){
    render(content, main);
}







