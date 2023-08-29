import React, { useEffect, useState } from 'react'

const SideBar = ({ setCopyProducts, products, brands }) => {
    const [brand, setBrand] = useState('all');

    useEffect(() => {
        setCopyProducts([...products].filter(product => {
            if (brand === 'all') return true;
            return product.brand === brand;
        }));
    }, [brand]);

    return (
        <div className='products__buttons'>
            <h3>Производители</h3>
            <button
                onClick={() => setBrand('all')}
                className={`${brand === 'all' ? 'active' : ''}`}
            >
                Все
            </button>
            {brands.map(product => {
                return <button
                    key={product.brand}
                    onClick={() => setBrand(product.brand)}
                    className={`${product.brand === brand ? 'active' : ''}`}
                >
                    {product.brand}
                </button>
            })}
        </div>
    )
}

export default SideBar