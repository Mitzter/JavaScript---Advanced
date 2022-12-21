import { clearUserData, setUserData } from "../util.js";
import { get, post } from "./api.js";
//watch for required register or login information if it requires more/different inputs
export async function login(email, password){
    const {_id, email: resultEmail, accessToken} = await post('/users/login', {email, password});

    setUserData({
        _id,
        email: resultEmail,
        accessToken
    });
}

export async function register(email, password){
    const {_id, email: resultEmail, accessToken} = await post('/users/register', {email, password});

    setUserData({
        _id,
        email: resultEmail,
        accessToken
    });
}

export async function logout(){
    get('/users/logout');
    clearUserData();
}