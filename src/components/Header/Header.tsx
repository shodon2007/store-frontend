import React, { memo, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom'

import { exitUser } from '../../store/userSlice';
import basketSvg from '../../static/basket.svg';

import userSvg from '../../static/user.svg';
import classes from './Header.module.scss';


const Header = memo(() => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const isAuth = useMemo(() => user.isAuth, [user.isAuth]);

    function exitClick() {
        dispatch(exitUser());
        toast.success('Вы успешно вышли из аккаунта');
    }

    return (
        <header className={classes.header}>
            <Link to={'/'} className={classes.title}>
                shodon store
            </Link>
            <nav className={classes.nav}>
                {isAuth
                    ? <Link to='/basket' className={classes.item}>
                        <img src={basketSvg} className={classes.svg} alt="basket img" />
                        <span>корзина</span>
                    </Link>
                    : ''
                }
                {isAuth
                    ? <Link to='#' onClick={exitClick} className={classes.item}>
                        <img src={userSvg} className={classes.svg} alt="user img" />
                        <span>выйти</span>
                    </Link>
                    : <Link to='/login' className={classes.item}>
                        <img src={userSvg} className={classes.svg} alt="user img" />
                        <span>войти</span>
                    </Link>
                }
            </nav>
        </header>
    )
});

export default Header