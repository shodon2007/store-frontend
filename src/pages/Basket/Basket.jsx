import React, { memo, useMemo } from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import MyTitle from '../../components/UI/title/MyTitle';
import { useGetBasket, useTotalPrice } from '../../hooks/useBasket';
import MyButton from '../../components/UI/button/MyButton';
import BasketProducts from './BasketProducts';

import classes from './styles/Basket.module.scss';
import Loading from '../Loading';
import { toast } from 'react-toastify';


const Basket = memo(() => {
    const user = useSelector(state => state.user);
    const { isLoading, data } = useGetBasket();
    const totalPrice = useTotalPrice(data);

    const memoizedData = useMemo(() => data, [data]);
    const isAuth = useMemo(() => user.isAuth, []);

    if (!isAuth) {
        toast.error('Бро, тебе сначало надо зарегестрироваться')
        return <Navigate replace to={'/'} />
    }

    if (isLoading) {
        return <Loading />
    }

    if (data.length === 0) {
        return <MyTitle>Корзина пуста, купи что нибудь</MyTitle>
    }

    return (
        <div className={classes.main}>
            <MyTitle>Корзина</MyTitle>
            <BasketProducts data={memoizedData} />
            <div className={classes.bottom}>
                <MyTitle>
                    Итого: {totalPrice} рублей
                </MyTitle>
                <MyButton>Купить</MyButton>
            </div>
        </div>
    );
});

export default Basket