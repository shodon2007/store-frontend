import axios from "axios";
import { URL } from "../consts/consts";

export async function getProducts(type, brand) {
    return await axios.get(`${URL}/products/${type}`, {
        params: {
            brand
        }
    });
}

export async function getProduct(type, id) {
    return await axios.get(`${URL}/products/${type}/${id}`);
}
export async function getBrands(type) {
    return await axios.get(`${URL}/brands/${type}`);
}