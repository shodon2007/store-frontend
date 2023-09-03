import React from 'react'
import { useBrands } from '../hooks/useBrands';
import { useParams } from 'react-router-dom';
import classes from '../styles/Products.module.scss';

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
        <div className={classes.sidebar}>
            <h3>Производители</h3>
            <button
                onClick={() => setBrand('all')}
                className={`${classes.button} ${brand === 'all' ? classes.active : ''}`}
            >
                Все
            </button>
            {data.map(brandItem => {
                return <button
                    key={brandItem.name}
                    onClick={() => setBrand(brandItem.name)}
                    className={`${classes.button} ${brandItem.name === brand ? classes.active : ''}`}
                >
                    {brandItem.name}
                </button>
            })}
        </div>
    )
}

export default SideBar