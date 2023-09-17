import React from 'react'

import classes from './MyPrice.module.scss';

const MyPrice = ({ children }) => {

    return (
        <div className={classes.price}>{children}</div>
    )
}

export default MyPrice