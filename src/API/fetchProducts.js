import { URL } from "../consts/consts";
import { sendResponse } from "./sendResponse";

export async function getProducts(type, brand) {
    return await sendResponse(`${URL}/products/${type}`, {
        params: {
            brand
        }
    });
}

export async function getProduct(type, id) {
    return await sendResponse(`${URL}/products/${type}/${id}`);
}

export async function getFilter(type) {
    return await sendResponse(`${URL}/brands/${type}`);
}