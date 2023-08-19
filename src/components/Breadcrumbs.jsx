import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Breadcrumbs = ({ category, id }) => {
    const location = useLocation();
    return (
        <div className='breadcrumbs'>
            <Link to={'/'}>Каталог</Link>
            {category ? <Link to={category.url}>{category.name}</Link> : ''}
            {id ? <Link to={id.url}>{id.name}</Link> : ''}
        </div>
    )
}

export default Breadcrumbs