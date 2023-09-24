import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout.tsx";
import Login from "./pages/Auth/Login.jsx";
import Registration from "./pages/Auth/Registration.jsx";
import Catalog from "./pages/Catalog/Catalog.tsx";
import Products from "./pages/Products/Products.tsx";
import Product from "./pages/Product/Product.jsx";
import Basket from "./pages/Basket/Basket.jsx";

import "react-toastify/dist/ReactToastify.css";

const App: FC = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Catalog />} />
          <Route path=":type" element={<Products />} />
          <Route path=":type/:id" element={<Product />} />
          <Route path="basket" element={<Basket />} />
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
