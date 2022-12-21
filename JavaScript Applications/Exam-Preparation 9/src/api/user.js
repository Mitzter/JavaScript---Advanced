import { clearUserData, setUserData } from "../util.js";
import { get, post } from "./api.js";
//watch for required register or login information if it requires more/different inputs
export async function login(username, password){
    const {_id, username, accessToken} = await post('/users/login', {username, password});

    setUserData({
        _id,
        username,
        accessToken
    });
}

export async function register(username, password){
    const {_id, username, accessToken} = await post('/users/register', {username, password});

    setUserData({
        _id,
        username,
        accessToken
    });
}

export async function logout(){
    get('/users/logout');
    clearUserData();
}