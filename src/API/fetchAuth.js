import axios from "axios";
import { URL } from "../consts/consts";

export async function fetchLogin(login, password) {
    let errorMessage = '';
    const resp = await axios.get(`${URL}/auth/login`, {
        params: {
            login,
            password,
        }
    }).catch(error => {
        if (error) errorMessage = JSON.parse(error.request.responseText).message;
    });
    if (errorMessage) return { status: 'error', message: errorMessage };

    return {
        status: 'ok',
        token: resp.data.token,
        message: 'Вы успешно зашли на свой аккаунт =)',
        user: resp.data.user,
    };
}

export async function registration(login, password) {
    let errorMessage = '';
    const resp = await axios.post(`${URL}/auth/registration`, {
        login,
        password,
    }).catch(error => {
        errorMessage = JSON.parse(error.request.responseText).message;
    });
    if (errorMessage) return { status: 'error', message: errorMessage }

    return {
        status: 'ok',
        message: 'Вы успешно зарегестрировались!',
        token: resp.data.token,
        user: resp.data.user,
    }
}