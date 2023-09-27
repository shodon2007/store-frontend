import { useState } from "react";
import SideBar from "../../components/SideBar/SideBar";
import ProductList from "../../components/ProductList/ProductList";
import classes from "./Products.module.scss";
import { useParams } from "react-router-dom";
import Error404 from "../Error404";
import { useProducts } from "../../hooks/useProducts";
import Loading from "../Loading";

const Products = () => {
    const [brand, setBrand] = useState<string>("all");
    const { type } = useParams();
    if (!type) {
        return <Error404 />;
    }

    const { isFetching, data } = useProducts(brand, type);

    if (isFetching) {
        return <Loading />;
    }

    const notFound = !data || data.length === 0;

    if (notFound) {
        return <Error404 />;
    }

    return (
        <div className={classes.products}>
            <SideBar brand={brand} setBrand={setBrand} />
            <ProductList itemList={data} />
        </div>
    );
};

export default Products;
