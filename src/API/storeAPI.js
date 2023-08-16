import axios from "axios";

export async function getCatalogs() {
    const resp = await axios.get('http://localhost:3666/api/type')
    return resp.data;
}

export async function getProduct(type) {
    const resp = await axios.get(`http://localhost:3666/api/product?type=${type}`);
    return resp.data;
}