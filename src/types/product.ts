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
    attributes?: IAttributes[];
}

export interface IBrand {
    name: string;
    id: number;
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

export type TypeGetBrand = (type: string) => Promise<AxiosResponse<IBrand[]>>