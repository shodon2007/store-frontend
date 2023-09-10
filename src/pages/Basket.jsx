import React from 'react'
import { useGetBasket } from '../hooks/useBasket';
import MyTitle from '../components/UI/title/MyTitle';
import classes from '../styles/Basket.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { showModal } from '../store/modalSlice';
import { Link, Navigate } from 'react-router-dom';
import MyButton from '../components/UI/button/MyButton';
import { removeBasket } from '../API/fetchBasket';
import { URL } from '../consts/consts';
import trashSvg from '../static/trash.svg';


const Basket = () => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const { isLoading, data, refetch } = useGetBasket();

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
                        <img src={`${URL}/${product.img}`} alt="product-img" />
                        <div>
                            <Link to={`/${product.type}/${product.id}`} className="left">
                                <div>{product.name}</div>
                                <div className={classes.price}>{product.price} рублей</div>
                            </Link>
                            <img src={trashSvg} alt="trash" onClick={async () => {
                                await removeBasket(user.user, product.id);
                                refetch();
                            }} />
                        </div>
                    </div>
                })}
            </div>
            <div className={classes.bottom}>
                <MyTitle>
                    Итого: {data.map(product => product.price).reduce((acc, data) => acc + data)} рублей
                </MyTitle>
                <MyButton className={classes.button}>Купить</MyButton>
            </div>
        </div>
    )
}

export default Basket