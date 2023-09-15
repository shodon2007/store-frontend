import React from 'react'
import { Navigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

import MyTitle from '../../components/UI/title/MyTitle';
import MyButton from '../../components/UI/button/MyButton';
import Loading from '../Loading';
import Attributes from './Attributes';
import { URL } from '../../consts/consts';
import { useProduct } from '../../hooks/useProducts';
import { useCheckBasket } from '../../hooks/useBasket';
import { addBasket, removeBasket } from '../../API/fetchBasket';

import classes from './Product.module.scss';
import MySubtitle from '../../components/UI/subtitle/MySubtitle';

const Product = () => {
    const user = useSelector(state => state.user);
    const { type, id } = useParams();
    const { isFetching, data: product } = useProduct(type, id);
    const { data: addedToBasket, refetch: refetchBasket } = useCheckBasket(id);

    if (isFetching) {
        return <Loading />
    }

    function userIsNotAuth() {
        toast.error('Чуууваак, сначала зарегайся!!');
        return <Navigate replace to={'/registration'} />
    }

    async function removeFromBasket() {
        await removeBasket(user.user, id);
        refetchBasket();
    }

    async function addToBasket() {
        await addBasket(user.user, id);
        refetchBasket();
    }

    async function addBasketClick() {
        if (!user.isAuth) {
            return userIsNotAuth();
        }
        if (addedToBasket) {
            return removeFromBasket();
        }

        addToBasket();
    }

    return (
        <div className={classes.product}>
            <img className={classes.img} src={`${URL}${product.img}`} alt="phone" />
            <div className={classes.body}>
                <div className={classes.top}>
                    <MyTitle>{product.name}</MyTitle>
                    <Attributes attributes={product.attributes} />
                </div>
                <div className={classes.bottom}>
                    <MySubtitle>{product.price} рублей</MySubtitle>
                    <MyButton onClick={addBasketClick}>
                        {addedToBasket ? 'удалить из корзины' : 'в корзину'}
                    </MyButton>
                </div>
            </div>
        </div >
    )
}

export default Product