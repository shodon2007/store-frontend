import { useQuery } from "@tanstack/react-query"
import { getCatalog } from "../API/fetchCatalog"

export const useCatalog = () => {
    return useQuery(['catalog'], () => getCatalog(), {
        select: ({ data }) => data,
    })
}