import { FC, memo, useEffect, useState } from "react";
import SideBar from "../../components/SideBar/SideBar";
import ProductList from "../../components/ProductList/ProductList";
import classes from "./Products.module.scss";
import { useParams } from "react-router-dom";
import Error404 from "../Error404";
import { useProducts } from "../../hooks/useProducts";
import { TypeForm } from "../../types/side";
import TopBar from "../../components/TopBar/TopBar";
import Pagination from "../../components/Pagination/Pagination";

const Products: FC = memo(() => {
    const { type } = useParams();
    const [page, setPage] = useState<number>(0);

    const [form, setForm] = useState<TypeForm>({
        brands: ["all"],
        filter: {},
        price: {
            min: 0,
            max: 1000000,
        },
        sort: "none",
    });

    if (!type) {
        return <Error404 />;
    }
    const { data, refetch } = useProducts(type, form);
    useEffect(() => {
        refetch();
    }, [form]);

    const notFound = !data;

    if (notFound) {
        return <Error404 />;
    }

    return (
        <div className={classes.products}>
            <SideBar setForm={setForm} refetch={refetch} />
            <div className={classes.right}>
                <TopBar setForm={setForm} refetch={refetch} form={form} />
                <ProductList itemList={data} page={page} />
                <Pagination
                    length={data.length}
                    page={page}
                    setPage={setPage}
                />
            </div>
        </div>
    );
});

export default Products;
