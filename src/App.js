import React from 'react'
import Layout from './components/Layout'
import { Route, Routes } from 'react-router-dom'
import Catalog from './components/Catalog'
import ProductList from './components/ProductList'
import Item from './components/UI/item/Item'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Catalog />} />
        <Route path='type/:type' element={<ProductList />} />
        <Route path='type/:type/:id' element={<Item />} />
      </Route>
    </Routes>
  )
}

export default App