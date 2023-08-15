import React from 'react'
import { Route, Routes, Redirect } from 'react-router-dom'
import Catalog from './Catalog';
import MainPage from './MainPage';

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/catalog' element={<Catalog />} />
        </Routes>
    )
}

export default AppRouter