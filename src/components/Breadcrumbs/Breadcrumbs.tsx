import { FC, memo, useEffect, useState } from "react";

import classes from "./Breadcrumbs.module.scss";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useCatalog } from "../../hooks/useCatalog";
import Error404 from "../../pages/Error404";
import { getProduct } from "../../API/fetchProducts";

const Breadcrumbs: FC = memo(() => {
    const params = useParams();

    const [productName, setProductName] = useState("");
    useEffect(() => {
        async function createProductLink() {
            if (params.id && params.type) {
                const product = await getProduct(
                    params.type,
                    Number(params.id)
                );
                setProductName(product.data.name);
            } else {
                setProductName("");
            }
        }
        createProductLink();
    }, [params.id, params.type]);
    const { data: catalog } = useCatalog();
    if (!catalog || catalog.length === 0 || catalog === undefined) {
        return <Error404 />;
    }
    function createProductsLink() {
        if (params.type) {
            return (
                <>
                    {">"}
                    <Link to={`/${params.type}`}>
                        {
                            catalog?.filter(
                                (item) => item.name === params.type
                            )[0].name_ru
                        }
                    </Link>
                </>
            );
        }
        return "";
    }

    return (
        <div className={classes.breadcrumbs}>
            <Link to={"/"}>Главная</Link>
            {createProductsLink()}
            {productName ? (
                <>
                    {">"}
                    <Link to={`/${params.type}/${params.id}`}>
                        {productName}
                    </Link>
                </>
            ) : (
                ""
            )}
            {}
        </div>
    );
});

export default Breadcrumbs;
