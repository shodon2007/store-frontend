import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { URL } from '../consts/consts'
import { useProducts } from '../hooks/useProducts';

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
        <div>
            <div className="products__list">
                {data.map(product => {
                    return <Link
                        key={product.name}
                        className='products__product'
                        to={`${product.id}`}
                    >
                        <img src={`${URL}/${product.img}`} alt="product-img" />
                        {product.name}
                    </Link>
                })}
            </div>
        </div>
    )
}

export default ProductList