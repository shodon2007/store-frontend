import { useQuery } from "@tanstack/react-query"
import { checkBasket, getBasket } from "../API/fetchBasket";
import { useMemo, useState } from "react";
import { useAppSelector } from "./useRedux";

export const useCheckBasket = (device_id: number) => {
    const user = useAppSelector(state => state.user);
    return useQuery(['checkBasket', device_id, user.user], () => checkBasket(user.user, device_id), {
        select: ({ data }) => data
    });
}

export const useGetBasket = () => {
    const user = useAppSelector(state => state.user);
    return useQuery(['getBasket', user.user], () => getBasket(user.user), {
        select: ({ data }) => data
    });
}

export const useTotalPrice = (data) => {
    const [totalPrice, setTotalPrice] = useState(0);

    useMemo(() => {
        if (data && Array.isArray(data)) {
            let sum = 0;
            data.forEach(product => {
                sum += product.price;
            });
            setTotalPrice(sum);
        } else {
            setTotalPrice(0);
        }
    }, [data]);

    return totalPrice;
}
