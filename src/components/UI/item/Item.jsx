import React from 'react'
import { useParams } from 'react-router-dom'

import classes from './Item.module.scss';
import createPrice from '../../utils/createPrice';

const Item = ({ product }) => {
    const { type } = useParams();

    return (
        <div className={classes.item}>
            <img src={`http://localhost:3666/img/${type}.png`} alt="" />
            <div className={classes.bottom}>
                <div className={classes.name}>{product.name}</div>
                <div className={classes.price}>{createPrice(product.price)}</div>
            </div>
        </div>
    )
}

export default Item