import React from 'react'

import classes from './MyText.module.scss'

const MyText = ({ children }) => {
    return (
        <div className={classes.text}>{children}</div>
    )
}

export default MyText