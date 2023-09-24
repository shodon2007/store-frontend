import { ICatalog } from "../types/catalog";
import defaultAxios from "./axiosService";

export async function getCatalog() {
    return await defaultAxios.get<ICatalog[]>('/catalog');
}