import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { URL } from '../../consts/consts'
import { useProducts } from '../../hooks/useProducts';
import classes from './ProductList.module.scss';
import Error404 from '../../pages/Error404';

import MyText from '../UI/text/MyText';

const ProductList = ({ brand }) => {
    const { type } = useParams();
    const { isFetching, data } = useProducts(brand, type);

    if (isFetching) {
        return <div>Загрузка данных...</div>
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
                            <div className={classes.price}>{product.price} рублей</div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default ProductList