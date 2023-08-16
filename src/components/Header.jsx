import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <Link to={'/'}>Shodon Store</Link>
            <nav>
                <button>корзина</button>
                <button>войти</button>
            </nav>
        </header>
    )
}

export default Header