import { useQuery } from "@tanstack/react-query"
import { useSelector } from "react-redux"
import { checkBasket, getBasket } from "../API/fetchBasket";

export const useCheckBasket = (device_id) => {
    const user = useSelector(state => state.user);
    return useQuery(['checkBasket', device_id, user.user], () => checkBasket(user.user, device_id), {
        select: ({ data }) => data
    });
}

export const useGetBasket = () => {
    const user = useSelector(state => state.user);
    return useQuery(['getBasket', user.user], () => getBasket(user.user), {
        select: ({ data }) => data
    });
}