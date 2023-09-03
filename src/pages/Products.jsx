import React, { useState } from 'react'
import SideBar from '../components/SideBar';
import ProductList from '../components/ProductList';

const Products = () => {
    const [brand, setBrand] = useState('all');

    return (
        <div className='products'>
            <SideBar brand={brand} setBrand={setBrand} />
            <ProductList brand={brand} />
        </div>
    )
}

export default Products