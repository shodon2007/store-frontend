import { TypeGetFilter, TypeGetProduct, TypeGetProducts } from "../types/product";
import defaultAxios from "./axiosService";

export const getProducts: TypeGetProducts = async (type, form) => {
    return await defaultAxios.get(`/products/${type}`, {
        params: {
            form
        }
    });
}

export const getProduct: TypeGetProduct = async (type, id) => {
    return await defaultAxios.get(`/products/${type}/${id}`);
}

export const getFilter: TypeGetFilter = async (type) => {
    return await defaultAxios.get(`/side/${type}`);
}