import axios from "axios";

export async function getProducts(type) {
    const resp = await axios.get(`http://localhost:3000/products/${type}`);
    return resp.data;
}

export async function getProduct(type, id) {
    const resp = await axios.get(`http://localhost:3000/products/${type}/${id}`);
    return resp.data;
}