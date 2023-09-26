import React from 'react'
import MySubtitle from '../../components/UI/subtitle/MySubtitle'

import classes from './Attributes.module.scss';

const Attributes = ({ attributes }) => {
    return (
        <div className={classes.attributes}>
            <MySubtitle>характеристики</MySubtitle>
            <table className={classes.table}>
                {attributes.map(attribute => {
                    return <tr className={classes.tr}>
                        <td className={classes.td}>{attribute.title}</td>
                        <td className={classes.td}>{attribute.description}</td>
                    </tr>
                })}
            </table>
        </div>
    )
}

export default Attributes