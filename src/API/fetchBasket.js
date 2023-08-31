import axios from "axios";

export async function checkBasket(user_id, device_id) {
    const resp = await axios.get('http://localhost:3000/basket/checkAdd');
    console.log(resp);
    return resp.data;
} 