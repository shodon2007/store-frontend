import { UseQueryResult, useQuery } from "@tanstack/react-query"
import { getProduct, getProducts } from "../API/fetchProducts"
import { IProduct } from "../types/product";


export const useProducts = (brand: string, type: string): UseQueryResult<IProduct[]> => {
    return useQuery(['products', type, brand], () => getProducts(type, brand), {
        select: ({ data }) => data,
    });
}

export const useProduct = (type: string, id: number): UseQueryResult<IProduct> => {
    return useQuery(['product', type, id], () => getProduct(type, id), {
        select: ({ data }) => data,
    });
} 