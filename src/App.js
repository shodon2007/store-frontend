import React from 'react'
import Layout from './components/Layout'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Auth/Login.jsx';
import Registration from './pages/Auth/Registration.jsx';
import Catalog from './pages/Catalog/Catalog';
import Products from './pages/Products/Products';
import Product from './pages/Product/Product';
import Basket from './pages/Basket/Basket';

import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Catalog />} />
          <Route path=':type' element={<Products />} />
          <Route path=':type/:id' element={<Product />} />
          <Route path='basket' element={<Basket />} />
          <Route path='login' element={<Login />} />
          <Route path='registration' element={<Registration />} />
        </Route>
      </Routes>
    </div >
  )
}

export default App