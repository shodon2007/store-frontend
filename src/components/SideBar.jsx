import React from 'react'
import { useBrands } from '../hooks/useBrands';
import { useParams } from 'react-router-dom';

const SideBar = ({ brand, setBrand }) => {
    const { type } = useParams();
    const { isFetching, data } = useBrands(type);

    if (isFetching) {
        return <div>загрузка</div>
    }

    if (data.length === 0) {
        return <div></div>
    }

    return (
        <div className='products__buttons'>
            <h3>Производители</h3>
            <button
                onClick={() => setBrand('all')}
                className={`${brand === 'all' ? 'active' : ''}`}
            >
                Все
            </button>
            {data.map(brandItem => {
                return <button
                    key={brandItem.name}
                    onClick={() => setBrand(brandItem.name)}
                    className={`${brandItem.name === brand ? 'active' : ''}`}
                >
                    {brandItem.name}
                </button>
            })
            }
        </div>
    )
}

export default SideBar