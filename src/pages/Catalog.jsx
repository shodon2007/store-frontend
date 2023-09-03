import React from 'react'
import { Link } from 'react-router-dom';
import { useCatalog } from '../hooks/useCatalog';
import { URL } from '../consts/consts';

const Catalog = () => {
    const { isLoading, error, data } = useCatalog();

    if (isLoading) {
        return <h1>Загрузка...</h1>
    }

    if (error) {
        return <h1>Ошибка при получении данных</h1>
    }

    return (
        <div className='catalog'>
            {data.map((catalogItem, index) => {
                console.log(catalogItem);
                return <Link to={`/${catalogItem.name}`} key={index} className='catalog__item'>
                    <img src={`${URL}${catalogItem.img}`} alt="img" />
                    <div>{catalogItem.name_ru}</div>
                </Link>
            })}
        </div>
    )
}

export default Catalog