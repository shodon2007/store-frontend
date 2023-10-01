import axios, { AxiosResponse } from "axios";
import { URL } from "../consts/consts";
import defaultAxios from "./axiosService";
import { TypeAuthError, TypeAuthFunction, TypeAuthResponse, TypeAuthReturn } from "../types/auth";

function errorHandler(messageJSON: string): TypeAuthError {
    const message = JSON.parse(messageJSON).message;
    return {
        status: 'error',
        message: message,
    }
}

function successHandler(data: TypeAuthResponse): TypeAuthReturn {
    return {
        status: 'ok',
        token: data.token,
        message: data.message,
        user: data.user,
    }
}

export const fetchLogin: TypeAuthFunction = async (login, password) => {
    try {
        const resp: AxiosResponse<TypeAuthResponse> = await defaultAxios.get(`/auth/login`, {
            params: {
                login,
                password,
            }
        });

        return successHandler(resp.data);
    } catch (e: any) {
        return errorHandler(e.request.response);
    }
}

export const registration: TypeAuthFunction = async (login, password) => {
    try {
        const resp: AxiosResponse<TypeAuthResponse> = await axios
            .post(`${URL}/auth/registration`, {
                login,
                password
            })

        return successHandler(resp.data);
    } catch (e: any) {
        return errorHandler(e.request.response);
    }
}