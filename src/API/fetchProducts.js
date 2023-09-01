import axios from "axios";
import { URL } from "../consts/consts";

export async function getProducts(type) {
    const resp = await axios.get(`${URL}/products/${type}`);
    return resp.data;
}

export async function getProduct(type, id) {
    const resp = await axios.get(`${URL}/products/${type}/${id}`);
    return resp.data;
}