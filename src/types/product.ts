import { AxiosResponse } from "axios";

export interface IProduct {
        id: number;
        name: string;
        price: number;
        brand_id: number;
        type_id: number;
        img: string;
        type: string;
    
}

export type TypeGetProduct = (type: string, id: number) =>
    Promise<AxiosResponse<IProduct>>;

export type TypeGetProducts = (type: string, brand: string) =>
    Promise<AxiosResponse<IProduct[]>>;

export type TypeGetFilter = (type: string) => 
    Promise<AxiosResponse<IProduct[]>>;
