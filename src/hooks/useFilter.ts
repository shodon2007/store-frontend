import { useQuery } from "@tanstack/react-query"
import { getFilter } from "../API/fetchProducts"

export const useFilter = (type = 'all') => {
    return useQuery(['brands'], async () => {
        const res = await getFilter(type);
        const newRes = {
        }
        console.log(res.data);
        for (let item of res.data) {
            if (item.title in newRes) {
                newRes[item.title].push(item.description);
            } else {
                newRes[item.title] = [];
                newRes[item.title].push(item.description);
            }
        }


        return getFilter(type);
    }, {
        select: ({ data }) => data,
    })
}