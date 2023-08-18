import React, { useEffect, useState } from 'react'
import SideBar from './SideBar'
import { getProduct, getSettings } from '../API/storeAPI';
import { useParams } from 'react-router-dom';
import Item from './UI/item/Item';
import getMinMax from './utils/arrayMinMax';

const ProductList = () => {
    const { type } = useParams();
    const [products, setProducts] = useState([]);
    const [copyProducts, setCopyProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [brands, setBrands] = useState([]);
    const [settings, setSettings] = useState({
        price: {
            start: 0,
            end: 0
        },
        brand: 'all',
    });

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const data = await getProduct(type);
        setSettings((prew) => ({ ...prew, price: getMinMax(data) }));
        setProducts(data);
        setCopyProducts(data);
        setBrands([...data].map(product => product.brand));
        setBrands(prew => Array.from(new Set(prew)));
        setLoading(false);
    }

    async function changeSettings() {
        const data = await getSettings(type, settings);
        setProducts(data);
        setCopyProducts(data);
    }

    if (loading) {
        return <div>Загрузка...</div>
    }
    return (
        <div className='product'>
            <SideBar brands={brands} settings={settings} setSettings={setSettings} changeSettings={changeSettings} />
            <div className="product-list">
                {copyProducts.map(product => {
                    return <Item key={product.name} product={product} />
                })}
            </div>
        </div>
    )
}

export default ProductList