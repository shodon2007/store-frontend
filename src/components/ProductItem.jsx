import React from 'react'
import { useParams } from 'react-router-dom'

const ProductItem = ({ product }) => {
    const { type } = useParams();
    return (
        <div className='product-item'>
            <img src={`http://localhost:3666/img/${type}.png`} alt="" />
            <div className='item-bottom'>
                <div>{product.name}</div>
                <div>{product.price}</div>
            </div>
        </div>
    )
}

export default ProductItem