import { UseQueryResult, useQuery } from "@tanstack/react-query"
import { getProduct, getProducts } from "../API/fetchProducts"
import { IProduct } from "../types/product";
import { TypeForm } from "../types/side";


export const useProducts = (brand: string, type: string, form: TypeForm): UseQueryResult<IProduct[]> => {
    console.log('вот наш form: ', form)
    return useQuery(['products', type, brand], () => getProducts(type, brand, form), {
        select: ({ data }) => data,
    });
}

export const useProduct = (type: string, id: number): UseQueryResult<IProduct> => {
    return useQuery(['product', type, id], () => getProduct(type, id), {
        select: ({ data }) => data,
    });
} 