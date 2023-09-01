import axios from "axios";
import { URL } from "../consts/consts";

export async function checkBasket(user_id, device_id) {
    const resp = await axios.get(`${URL}/basket/checkAdd`);
    return resp.data;
} 