import { URL } from "../consts/consts";
import { sendResponse } from "./sendResponse";

export async function addBasket(user, device_id) {
    return await sendResponse(`${URL}/basket/add`, {
        params: {
            user, device_id
        }
    })
}

export async function getBasket(user) {
    return await sendResponse(`${URL}/basket/get`, {
        params: {
            user
        }
    });
}

export async function removeBasket(user, device_id) {
    return await sendResponse(`${URL}/basket/remove`, {
        params: {
            user, device_id
        }
    });
}

export async function checkBasket(user, device_id) {
    return await sendResponse(`${URL}/basket/check`, {
        params: {
            user,
            device_id
        }
    });
}