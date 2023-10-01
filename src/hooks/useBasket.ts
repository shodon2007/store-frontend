import { useQuery } from "@tanstack/react-query"
import { checkBasket, getBasket } from "../API/fetchBasket";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { IProduct } from "../types/product";
import { RootState } from "../store";

export const useCheckBasket = (device_id: number) => {
    const user = useSelector((state: RootState) => state.user);
    return useQuery(['checkBasket', device_id, user.user], () => checkBasket(user.user, device_id), {
        select: ({ data }) => data
    });
}

export const useGetBasket = () => {
    const user = useSelector((state: RootState) => state.user);
    return useQuery(['getBasket', user.user], () => getBasket(user.user), {
        select: ({ data }) => data
    });
}

export const useTotalPrice = (data: IProduct[] | undefined) => {
    const [totalPrice, setTotalPrice] = useState<number>(0);

    useMemo(() => {
        if (data && Array.isArray(data)) {
            let sum: number = 0;
            sum += data.reduce((acc, item) => acc + item.price, 0);
            setTotalPrice(sum);
        } else {
            setTotalPrice(0);
        }
    }, [data]);

    return totalPrice;
}
