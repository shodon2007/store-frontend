import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProducts } from '../API/fetchProducts';
import SideBar from '../components/SideBar';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [copyProducts, setCopyProducts] = useState([]);
    const [brands, setBrands] = useState([]);

    const { type } = useParams();
    useEffect(() => {
        async function getData() {
            const data = await getProducts(type);
            setProducts(data);
            setCopyProducts(data);
            setBrands(data)
        }
        getData();
    }, []);


    return (
        <div className='products'>
            <SideBar setCopyProducts={setCopyProducts} products={products} brands={brands} />
            <div className="products__list">
                {copyProducts.map(product => {
                    return <Link key={product.name} className='products__product' to={`${product.id}`}>
                        <img src={`http://localhost:3000/${product.img}`} alt="" />
                        {product.name}
                    </Link>
                })}
            </div>
        </div>
    )
}

export default Products