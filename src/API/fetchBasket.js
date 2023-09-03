import axios from "axios";
import { URL } from "../consts/consts";

export async function addBasket(user, device_id) {
    const resp = await axios.get(`${URL}/basket/add`, {
        params: {
            user,
            device_id,
        }
    });
    return resp.data;
}

export async function removeBasket(user, device_id) {
    const resp = await axios.get(`${URL}/basket/remove`, {
        params: {
            user,
            device_id,
        }
    });
    return resp.data;
}

export async function checkBasket(user, device_id) {
    const data = await axios.get(`${URL}/basket/check`, {
        params: {
            user,
            device_id,
        }
    });

    return data;
}