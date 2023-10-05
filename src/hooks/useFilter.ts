import { useQuery } from "@tanstack/react-query"
import { getFilter } from "../API/fetchProducts"
import { IAttributes } from "../types/product"
import { TypeSide } from "../types/side";

function createFilterObject(data: IAttributes[]): TypeSide[] {
    const res: TypeSide[] = [];
    data.forEach(item => {
        const findAttribute = res.findIndex(el => el.title === item.title);
        if (findAttribute === -1) {
            res.push({
                title: item.title,
                descriptions: [
                    item.description
                ]
            });
        } else {
            const findItem = res[findAttribute].descriptions.findIndex(el => el === item.description);
            if (findItem === -1) {
                res[findAttribute].descriptions?.push(item.description);
            }
        }
    })

    return res;
}

export const useFilter = (type = 'all') => {
    return useQuery(['brands'], async () => {
        const res = await getFilter(type);

        return createFilterObject(res.data);
    })
}