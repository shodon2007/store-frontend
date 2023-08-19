import React from 'react'
import { Link, useParams } from 'react-router-dom'

import classes from './Item.module.scss';
import createPrice from '../../utils/createPrice';

const Item = ({ product }) => {
    const { type } = useParams();

    return (
        <Link to={`/${type}/${product.id}`} className={classes.item}>
            <img src={`http://localhost:3666/img/${type}.png`} alt="" />
            <div className={classes.bottom}>
                <div className={classes.name}>{product.name}</div>
                <div className={classes.price}>{createPrice(product.price)}</div>
            </div>
        </Link>
    )
}

export default Item