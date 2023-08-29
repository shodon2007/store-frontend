import React from 'react'
import { Outlet } from 'react-router-dom'
import SmallModal from './UI/small-modal/SmallModal'
import Header from './Header'

const Layout = () => {
    return (
        <>
            <Header />
            <SmallModal />
            <Outlet />
        </>
    )
}

export default Layout