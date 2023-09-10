import React from 'react'
import { Navigate, useParams } from 'react-router-dom';

import MyTitle from '../components/UI/title/MyTitle';
import { URL } from '../consts/consts';
import { useProduct } from '../hooks/useProducts';
import classes from '../styles/Product.module.scss';
import { useCheckBasket } from '../hooks/useBasket';
import { useDispatch, useSelector } from 'react-redux';
import { addBasket, removeBasket } from '../API/fetchBasket';
import { showModal } from '../store/modalSlice';
import MyButton from '../components/UI/button/MyButton';

const Product = () => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const { type, id } = useParams();
    const { isFetching, data: products } = useProduct(type, id);
    const { isFetching: basketLoading, data: basketCheck, refetch: refetchBasket } = useCheckBasket(id);

    if (isFetching) {
        return <div>загрузка...</div>
    }

    return (
        <div className={classes.product}>
            <img src={`${URL}${products.img}`} alt="phone" />
            <div>
                <div className={classes.top}>
                    <MyTitle>{products.name}</MyTitle>
                    <div className={classes.attributes}>
                        <h3>Характеристики</h3>
                        <div >
                            {products.attributes.map(attribute => {
                                return <>
                                    <div className={classes.left}>
                                        {attribute.title}
                                    </div>
                                    <div className={classes.right}>
                                        {attribute.description}
                                    </div>
                                </>
                            })}
                        </div>
                    </div>
                </div>
                <div className={classes.bottom}>
                    <div>{products.price} рублей</div>
                    {basketLoading || !basketCheck
                        ? <MyButton onClick={async () => {
                            if (!user.isAuth) {
                                dispatch(showModal({ text: 'Чуууваак, сначала зарегайся!!', type: 'good' }));
                                return <Navigate replace to={'/registration'} />
                            }
                            await addBasket(user.user, id);
                            refetchBasket();
                        }}>в корзину</MyButton>
                        : <MyButton onClick={async () => {
                            await removeBasket(user.user, id)
                            refetchBasket();
                        }}>удалить из корзины</MyButton>
                    }
                </div>
            </div>
        </div >
    )
}

export default Product