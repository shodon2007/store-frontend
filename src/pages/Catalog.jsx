import React, { useEffect, useState } from 'react'
import { getCatalog } from '../API/fetchCatalog';
import { Link } from 'react-router-dom';

const Catalog = () => {
    const [type, setType] = useState([]);
    useEffect(() => {
        async function updateType() {
            const data = await getCatalog();
            setType(data);
        }
        updateType();
    }, []);
    return (
        <div className='catalog'>
            {type.map((catalogItem, index) => {
                return <Link to={`/${catalogItem.name}`} key={index} className='catalog__item'>
                    <img src={`http://localhost:3000${catalogItem.img}`} alt="img" />
                    <div>{catalogItem.name_ru}</div>
                </Link>
            })}
        </div>
    )
}

export default Catalog