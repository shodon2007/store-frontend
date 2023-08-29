import React from 'react'
import classes from './SmallModal.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { removeModal } from '../../../store/modalSlice';

const SmallModal = ({ text, type }) => {
    const modal = useSelector(state => state.modal)
    const dispatch = useDispatch();
    setTimeout(() => {
        dispatch(removeModal());
    }, 3000);

    if (modal.show) {
        return (
            <div className={`${classes.modal} ${modal.type === 'good' ? classes.good : classes.bad}`}>
                {modal.text}
            </div>
        )
    }

    return (<></>)
}

export default SmallModal;