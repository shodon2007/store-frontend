import axios from "axios";
import { URL } from "../consts/consts";

export async function getCatalog() {
    return await axios.get(`${URL}/catalog`);
}