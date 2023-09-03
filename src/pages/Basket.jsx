import React from 'react'
import { useGetBasket } from '../hooks/useBasket';
import MyTitle from '../components/UI/title/MyTitle';
import classes from '../styles/Basket.module.scss';

const Basket = () => {
    const { isLoading, data } = useGetBasket();

    if (isLoading) {
        return <div>загрузка...</div>
    }

    if (data.length === 0) {
        return <MyTitle>Корзина пуста, купи что нибудь чувааак</MyTitle>
    }

    console.log(data);

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
                <div className={classes.price}>
                    Итого: {data.map(product => product.price).reduce((acc, data) => acc + data)} рублей
                </div>
                <button className={classes.button}>Заказать</button>
            </div>
        </div>
    )
}

export default Basket