import { FC, memo, useEffect, useState } from "react";
import SideBar from "../../components/SideBar/SideBar";
import ProductList from "../../components/ProductList/ProductList";
import classes from "./Products.module.scss";
import { useParams } from "react-router-dom";
import Error404 from "../Error404";
import { useProducts } from "../../hooks/useProducts";
import { TypeForm } from "../../types/side";

const Products: FC = memo(() => {
    let [brand, setBrand] = useState("all");
    const { type } = useParams();
    const [form, setForm] = useState<TypeForm>({});
    if (!type) {
        return <Error404 />;
    }
    const { data, refetch } = useProducts(brand, type, form);

    const notFound = !data || data.length === 0;

    if (notFound) {
        return <Error404 />;
    }

    return (
        <div className={classes.products}>
            <SideBar form={form} setForm={setForm} refetch={refetch} />
            <ProductList itemList={data} />
        </div>
    );
});

export default Products;
