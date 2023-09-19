import React, { memo } from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useQueryClient } from '@tanstack/react-query';

import { removeBasket } from '../../API/fetchBasket';
import { URL } from '../../consts/consts';
import trashSvg from '../../static/trash.svg';

import classes from './styles/BasketProducts.module.scss'
import MyText from '../../components/UI/text/MyText';
import MyPrice from '../../components/UI/price/MyPrice';


const BasketProducts = memo(({ data }) => {
    console.log('render BasketProducts');
    const user = useSelector(state => state.user);
    const queryClient = useQueryClient()

    async function trashClick(id) {
        await removeBasket(user.user, id);
        queryClient.invalidateQueries(['getBasket', user.user])
    }

    return (
        <div className={classes.products}>
            {data.map(product => {
                return <div key={product.name} className={classes.product}>
                    <Link to={`/${product.type}/${product.id}`}>
                        <img src={`${URL}/${product.img}`} className={classes.img} alt="product-img" />
                    </Link>
                    <div className={classes.bottom}>
                        <Link className={classes.name} to={`/${product.type}/${product.id}`}>
                            <MyText>{product.name}</MyText>
                            <MyPrice>{product.price} рублей</MyPrice>
                        </Link>
                        <img src={trashSvg} alt="trash" className={classes.trash} onClick={() => trashClick(product.id)} />
                    </div>
                </div>
            })}</div>
    )
})

export default BasketProducts