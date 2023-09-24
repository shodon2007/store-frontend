import { useQuery } from "@tanstack/react-query"
import { getFilter } from "../API/fetchProducts"

export const useFilter = (type = 'all') => {
    return useQuery(['brands'], () => getFilter(type), {
        select: ({ data }) => data,
    })
}