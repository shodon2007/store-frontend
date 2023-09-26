import { TypeAddBasketFunction, TypeCheckBasketFunction, TypeGetBasketFunction, TypeRemoveBasketFunction } from "../types/basket";
import defaultAxios from "./axiosService";

export const addBasket: TypeAddBasketFunction = async (user, device_id) => {
    await defaultAxios.get(`/basket/add`, {
        params: {
            user,
            device_id
        }
    });
} 

export const getBasket: TypeGetBasketFunction = async (user) => {
    return await defaultAxios.get(`/basket/get`, {
        params: {
            user
        }
    })
}

export const removeBasket: TypeRemoveBasketFunction = async (user, device_id) => {
    await defaultAxios.get(`/basket/remove`, {
        params: {
            user,
            device_id
        }
    });
}

export const checkBasket: TypeCheckBasketFunction = async (user, device_id) => {
    return await defaultAxios.get(`/basket/check`, {
        params: {
            user,
            device_id
        }
    });
}