import React from 'react'
import { Link, useParams } from 'react-router-dom'

import { URL } from '../../consts/consts'
import { useProducts } from '../../hooks/useProducts';
import Error404 from '../../pages/Error404';
import MyText from '../UI/text/MyText';
import MyPrice from '../UI/price/MyPrice';

import classes from './ProductList.module.scss';
import Loading from '../../pages/Loading';

const ProductList = ({ brand }) => {
    const { type } = useParams();
    const { isFetching, data } = useProducts(brand, type);

    if (isFetching) {
        return <Loading />
    }

    const notFound = data.length === 0 || !data;

    if (notFound) {
        return <Error404 />
    }

    return (
        <div className={classes.list}>
            {data.map(product => {
                return (
                    <Link
                        key={product.name}
                        className={classes.product}
                        to={`${product.id}`}
                    >
                        <img className={classes.img} src={`${URL}/${product.img}`} alt="product-img" />
                        <div className={classes.bottom}>
                            <MyText>{product.name}</MyText>
                            <MyPrice>{product.price} рублей</MyPrice>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default ProductList