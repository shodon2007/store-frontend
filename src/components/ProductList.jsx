import React, { useEffect, useState } from 'react'
import SideBar from './SideBar'
import { getProduct } from '../API/storeAPI';
import { useParams } from 'react-router-dom';
import Item from './UI/item/Item';
import getMinMax from './utils/arrayMinMax';

const ProductList = () => {
    const { type } = useParams();
    const [products, setProducts] = useState([]);
    const [copyProducts, setCopyProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [brands, setBrands] = useState([]);
    const [brand, setBrand] = useState('all');
    const [price, setPrice] = useState({
        start: 0,
        end: 1000000,
    });

    useEffect(() => {
        fetchData();
    }, []);
    useEffect(() => {
        changeBrand()
    }, [brand]);
    useEffect(() => {
        priceChange();
    }, [price]);

    async function fetchData() {
        const data = await getProduct(type);
        setPrice(getMinMax(data));
        setProducts(data);
        setCopyProducts(data);
        setBrands([...data].map(product => product.brand));
        setBrands(prew => Array.from(new Set(prew)));
        setLoading(false);
    }

    function changeBrand() {
        if (brand === 'all') {
            setCopyProducts([...products]);
            return;
        }
        setCopyProducts([...products].filter(product => product.brand === brand));
    }

    function priceChange() {
        setCopyProducts(products.filter(product => product.price >= price.min && product.price <= price.max))
    }

    if (loading) {
        return <div>Загрузка...</div>
    }
    return (
        <div className='product'>
            <SideBar brands={brands} brand={brand} setBrand={setBrand} price={price} setPrice={setPrice} />
            <div className="product-list">
                {copyProducts.map(product => {
                    return <Item key={product.name} product={product} />
                })}
            </div>
        </div>
    )
}

export default ProductList