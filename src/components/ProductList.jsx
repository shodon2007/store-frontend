import React, { useEffect, useState } from 'react'
import SideBar from './SideBar'
import { getProduct } from '../API/storeAPI';
import { useParams } from 'react-router-dom';
import ProductItem from './ProductItem';

const ProductList = () => {
    const { type } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const data = await getProduct(type);
        setProducts(data);
        setLoading(false);
    }

    if (loading) {
        return <div>Загрузка...</div>
    }
    return (
        <div className='product'>
            <SideBar />
            <div className="product-list">
                {products.map(product => {
                    return <ProductItem key={product.name} product={product} />
                })}
            </div>
        </div>
    )
}

export default ProductList