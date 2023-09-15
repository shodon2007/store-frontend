import React, { memo } from 'react'
import classes from './MyTitle.module.scss'

const MyTitle = memo(({ children, ...props }) => {
    return (
        <h1 {...props} className={classes.title}>{children}</h1>
    )
})

export default MyTitle