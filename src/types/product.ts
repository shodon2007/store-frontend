import { AxiosResponse } from "axios";
import { TypeForm } from "./side";

export interface IAttributes {
    description: string;
    device_id: number;
    id: number;
    title: string;
}

export interface IProduct {
    id: number;
    name: string;
    price: number;
    brand_id: number;
    type_id: number;
    img: string;
    type: string;
    brand: string;
    attributes?: IAttributes[];
}


export type TypeGetProduct = (
    type: string,
    id: number
) => Promise<AxiosResponse<IProduct>>;

export type TypeGetProducts = (
    type: string,
    form: TypeForm
) => Promise<AxiosResponse<IProduct[]>>;

export type TypeGetFilter = (type: string) => Promise<AxiosResponse<IAttributes[]>>;

export type TypeGetBrand = (type: string | undefined) => Promise<AxiosResponse<string[]>>