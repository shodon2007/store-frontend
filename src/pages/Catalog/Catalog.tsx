import { FC } from "react";

import Loading from "../Loading";
import Error404 from "../Error404";
import { useCatalog } from "../../hooks/useCatalog";

import ProductList from "../../components/ProductList/ProductList";

const Catalog: FC = () => {
    const { isLoading, error, data: catalog } = useCatalog();

    if (isLoading) {
        return <Loading />;
    }

    if (error || !catalog) {
        return <Error404 />;
    }

    return (
        <div>
            <ProductList itemList={catalog} />
        </div>
    );
};

export default Catalog;
