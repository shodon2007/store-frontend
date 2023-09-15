import React from 'react'

import classes from './MySubtitle.module.scss';

const MySubtitle = ({ children }) => {
    return (
        <div className={classes.subtitle}>{children}</div>
    )
}

export default MySubtitle