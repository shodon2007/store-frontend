import React from 'react'
import { Link } from 'react-router-dom'

const CatalogItem = ({ catalog }) => {
    return (
        <Link to={`/${catalog.name}`} className='catalog-item'>
            <img src={`http://localhost:3666/img/${catalog.name}.png`} alt="name" />
            <div>{catalog.name_ru}</div>
        </Link>
    )
}

export default CatalogItem