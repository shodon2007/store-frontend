import axios from "axios";

export async function getCatalogs() {
    const resp = await axios.get('http://localhost:3666/api/type')
    return resp.data;
}

export async function getProduct(id) {
    const resp = await axios.get(`http://localhost:3666/api/product_info?id=${id}`);
    return resp.data;
}

export async function getProducts(type) {
    const resp = await axios.get(`http://localhost:3666/api/product?type=${type}`);
    return resp.data;
}

export async function getSettings(type, settings) {
    const resp = await axios.get(`http://localhost:3666/api/getSettings`, {
        params: {
            type,
            settings
        }
    })
    return resp.data;
}