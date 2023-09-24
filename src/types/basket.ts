import { IProduct } from "./product";
import { AxiosResponse } from "axios";

export type TypeAddBasketFunction = (user: string, device_id: number) =>
    Promise<void>;

export type TypeGetBasketFunction = (user: string) =>
    Promise<AxiosResponse<IProduct[]>>;

export type TypeRemoveBasketFunction = (user: string, device_id: number) =>
    Promise<void>;

export type TypeCheckBasketFunction = (user: string, device_id: number) => 
    Promise<AxiosResponse<boolean>>;