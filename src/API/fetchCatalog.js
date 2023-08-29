import axios from "axios";

export async function getCatalog() {
    const resp = await axios.get('http://localhost:3000/catalog/');
    return resp.data;
}