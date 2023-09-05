import { useQuery } from "@tanstack/react-query"
import { getBrands } from "../API/fetchProducts"

export const useBrands = (type = 'all') => {
    return useQuery(['brands'], () => getBrands(type), {
        select: ({ data }) => data,
    })
}