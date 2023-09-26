import { AxiosResponse } from "axios";
import { ICatalog } from "../types/catalog";
import defaultAxios from "./axiosService";

export async function getCatalog(): Promise<AxiosResponse<ICatalog[]>> {
    return await defaultAxios.get<ICatalog[]>('/catalog');
}