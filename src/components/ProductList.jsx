import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { URL } from '../consts/consts'
import { useProducts } from '../hooks/useProducts';
import classes from '../styles/Products.module.scss';

const ProductList = ({ brand }) => {
    const { type } = useParams();
    const { isFetching, data } = useProducts(brand, type);

    if (isFetching) {
        return <div>Загрузка данных...</div>
    }

    if (data.length === 0 || !data) {
        return <h1>404, Ничего не найдено, сорри чувак =((</h1>
    }

    return (
        <div className={classes.productList}>
            {data.map(product => {
                return (
                    <Link
                        key={product.name}
                        className={classes.product}
                        to={`${product.id}`}
                    >
                        <img src={`${URL}/${product.img}`} alt="product-img" />
                        <div className="bottom">
                            <div>{product.name}</div>
                            <div>{product.price} рублей</div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default ProductList