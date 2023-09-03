import { useQuery } from "@tanstack/react-query"
import { useSelector } from "react-redux"
import { checkBasket } from "../API/fetchBasket";

export const useCheckBasket = (device_id) => {
    const user = useSelector(state => state.user);
    return useQuery(['checkBasket', device_id], () => checkBasket(user.user, device_id), {
        select: ({ data }) => data
    });
}