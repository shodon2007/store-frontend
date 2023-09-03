import React, { useState } from 'react'
import SideBar from '../components/SideBar';
import ProductList from '../components/ProductList';
import classes from '../styles/Products.module.scss';

const Products = () => {
    const [brand, setBrand] = useState('all');

    return (
        <div className={classes.products}>
            <SideBar brand={brand} setBrand={setBrand} className={classes.sidebar} />
            <ProductList brand={brand} />
        </div>
    )
}

export default Products