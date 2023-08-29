import React from 'react'
import Layout from './components/Layout'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login.jsx';
import Registration from './pages/Registration';
import Catalog from './pages/Catalog';
import Basket from './pages/Basket';
import Products from './pages/Products';
import Product from './pages/Product';

const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Catalog />} />
          {/* <Route path='admin' element={<Admin />} /> */}
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