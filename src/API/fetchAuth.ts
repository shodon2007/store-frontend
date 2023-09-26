import axios, { AxiosResponse } from "axios";
import { URL } from "../consts/consts";
import defaultAxios from "./axiosService";
import { TypeAuthError, TypeAuthFunction, TypeAuthResponse, TypeAuthReturn } from "../types/auth";

function errorCreator(message: string): string {
    return JSON.parse(message).message;
}

function errorHandler(message: string): TypeAuthError {
    return {
        status: 'error',
        message: message,
    }
}

function successHandler(data: TypeAuthResponse):TypeAuthReturn {
    return {
        status: 'ok',
        token: data.token,
        message: data.message,
        user: data.user,
    } 
}

export const fetchLogin:TypeAuthFunction = async (login, password) => {
    let errorMessage: string = '';
    const resp: AxiosResponse<TypeAuthResponse> = await defaultAxios
        .get(`/auth/login`, {
            params: {
                login,
                password,
            }
        })
        .catch(e => {
            errorMessage = errorCreator(e.request.response);
        });
    
    return errorMessage
        ? errorHandler(errorMessage)
        : successHandler(resp.data);
}

export const registration: TypeAuthFunction = async (login, password) => {
    let errorMessage = '';
    const resp: AxiosResponse<TypeAuthResponse> = await axios
        .post(`${URL}/auth/registration`, {
            login,
            password
        })
        .catch(error => {
            errorMessage = errorCreator(error.request.response);
        });
    return errorMessage
        ? errorHandler(errorMessage)
        : successHandler(resp.data);
}