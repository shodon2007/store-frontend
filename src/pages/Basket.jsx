import React from 'react'
import { useGetBasket } from '../hooks/useBasket';
import MyTitle from '../components/UI/title/MyTitle';
import classes from '../styles/Basket.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { showModal } from '../store/modalSlice';
import { Navigate } from 'react-router-dom';
import MyButton from '../components/UI/button/MyButton';

const Basket = () => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const { isLoading, data } = useGetBasket();

    if (!user.isAuth) {
        dispatch(showModal({ text: 'Бро, тебе сначало надо зарегестрироваться', type: 'bad' }))
        return <Navigate replace to={'/'} />
    }

    if (isLoading) {
        return <div>загрузка...</div>
    }

    if (data.length === 0) {
        return <MyTitle>Корзина пуста, купи что нибудь чувааак</MyTitle>
    }

    return (
        <div className={classes.basket}>
            <MyTitle>Корзина</MyTitle>
            <div className={classes.list}>
                {data.map(product => {
                    return <div className={classes.item} key={product.name}>
                        <div className={classes.left}>
                            {product.name}
                        </div>
                        <div className={classes.right}>
                            {product.price} рублей
                        </div>
                    </div>
                })}
            </div>
            <div className={classes.bottom}>
                <MyTitle>
                    Итого: {data.map(product => product.price).reduce((acc, data) => acc + data)} рублей
                </MyTitle>
                <MyButton className={classes.button}>Заказать</MyButton>
            </div>
        </div>
    )
}

export default Basket