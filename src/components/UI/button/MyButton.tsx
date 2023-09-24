import React, { memo } from 'react'
import classes from './MyButton.module.scss'

const MyButton = memo(({ children, ...props }) => {
    return (
        <button {...props} className={classes.button}>{children}</button>
    )
})

export default MyButton