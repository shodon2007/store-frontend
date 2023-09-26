import { useState } from "react";
import SideBar from "../../components/SideBar/SideBar";
import ProductList from "../../components/ProductList/ProductList";
import classes from "./Products.module.scss";

const Products = () => {
    const [brand, setBrand] = useState<string>("all");

    return (
        <div className={classes.products}>
            <SideBar brand={brand} setBrand={setBrand} />
            <ProductList brand={brand} />
        </div>
    );
};

export default Products;
