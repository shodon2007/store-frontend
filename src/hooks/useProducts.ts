import { useQuery } from "@tanstack/react-query"
import { getProduct, getProducts } from "../API/fetchProducts"

export const useProducts = (brand, type) => {
    return useQuery(['products', type, brand], () => getProducts(type, brand), {
        select: ({ data }) => data,
    });
}

export const useProduct = (type, id) => {
    return useQuery(['product', type, id], () => getProduct(type, id), {
        select: ({ data }) => data,
    });
} 