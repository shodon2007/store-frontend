import React, { useEffect, useState } from 'react'
import SideBar from './SideBar'
import { getProduct } from '../API/storeAPI';
import { useParams } from 'react-router-dom';
import Item from './UI/item/Item';

const ProductList = () => {
    const { type } = useParams();
    const [products, setProducts] = useState([]);
    const [copyProducts, setCopyProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const data = await getProduct(type);
        setProducts(data);
        setCopyProducts(data);
        setLoading(false);
    }

    function changeBrand(value) {
        if (value === 'all') {
            setCopyProducts([...products]);
            return;
        }
        setCopyProducts([...products].filter(product => product.brand === value))
    }

    if (loading) {
        return <div>Загрузка...</div>
    }
    return (
        <div className='product'>
            <SideBar changeBrand={changeBrand} />
            <div className="product-list">
                {copyProducts.map(product => {
                    return <Item key={product.name} product={product} />
                })}
            </div>
        </div>
    )
}

export default ProductList