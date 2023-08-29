import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { exitUser } from '../store/userSlice';
import basketSvg from '../static/basket.svg';
import userSvg from '../static/user.svg';
import { showModal } from '../store/modalSlice';

const Header = () => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    function exitClick() {
        dispatch(exitUser());
        dispatch(showModal({ text: 'Вы успешно вышли из аккаунта', type: 'good' }));
    }

    return (
        <header>
            <Link to={'/'} className='header__title'>
                shodon store
            </Link>
            <nav className='header__nav'>
                <div className='header__item'>
                    <img src={basketSvg} alt="basket img" />
                    <Link to={'/basket'}>
                        корзина
                    </Link>
                </div>
                <div className='header__item'>
                    <img src={userSvg} alt="user img" />
                    {user.isAuth
                        ? <a href='#' onClick={exitClick}>выйти</a>
                        : <Link to={'/login'}>войти</Link>
                    }
                </div>
            </nav>
        </header>
    )
}

export default Header