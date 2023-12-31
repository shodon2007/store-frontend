import { memo, useMemo } from "react";
import { Navigate } from "react-router-dom";

import MyTitle from "../../components/UI/title/MyTitle";
import { useGetBasket, useTotalPrice } from "../../hooks/useBasket";
import MyButton from "../../components/UI/button/MyButton";

import classes from "./styles/Basket.module.scss";
import Loading from "../Loading";
import { toast } from "react-toastify";
import MySubtitle from "../../components/UI/subtitle/MySubtitle";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import BasketList from "../../components/BasketList/BasketList";

const Basket = memo(() => {
    const user = useSelector((state: RootState) => state.user);
    const { isLoading, data } = useGetBasket();
    const isAuth = useMemo(() => user.isAuth, []);
    const totalPrice = useTotalPrice(data);
    if (!isAuth) {
        toast.error("Бро, тебе сначало надо зарегестрироваться");
        return <Navigate replace to={"/"} />;
    }

    if (isLoading) {
        return <Loading />;
    }

    if (!data || data.length === 0) {
        return <MyTitle>Корзина пуста, купи что нибудь</MyTitle>;
    }

    function cringeClick() {
        toast.error(
            "Чел ты реально думал что тут можно заказать??? ххахахаха Кринж"
        );
    }

    return (
        <div className={classes.main}>
            <MyTitle>Корзина</MyTitle>
            <BasketList data={data} />

            <div className={classes.bottom}>
                <MySubtitle>Итого: {totalPrice} рублей</MySubtitle>
                <MyButton onClick={cringeClick}>Купить</MyButton>
            </div>
        </div>
    );
});

export default Basket;
