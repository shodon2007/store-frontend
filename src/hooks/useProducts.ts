import { UseQueryResult, useQuery } from "@tanstack/react-query"
import { getBrands, getProduct, getProducts } from "../API/fetchProducts"
import { IProduct } from "../types/product";
import { TypeForm } from "../types/side";


export const useProducts = (type: string, form: TypeForm): UseQueryResult<IProduct[]> => {
    return useQuery(['products', type], () => getProducts(type, form), {
        select: ({ data }) => data,
    });
}

export const useProduct = (type: string, id: number): UseQueryResult<IProduct> => {
    return useQuery(['product', type, id], () => getProduct(type, id), {
        select: ({ data }) => data,
    });
}

export const useBrand = (type?: string): UseQueryResult<string[]> => {
    if (type) {
        return useQuery(['brands', type], () => getBrands(type), {
            select: ({ data }) => data,
        });
    }

    return useQuery(['brands'], () => getBrands(type), {
        select: ({ data }) => data,
    });
}