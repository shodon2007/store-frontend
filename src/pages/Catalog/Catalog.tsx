import { FC } from "react";

import Loading from "../Loading";
import Error404 from "../Error404";
import { useCatalog } from "../../hooks/useCatalog";

import CatalogList from "../../components/CatalogList/CatalogList";

const Catalog: FC = () => {
    const { isLoading, error, data: catalog } = useCatalog();

    if (isLoading) {
        return <Loading />;
    }

    if (error || !catalog) {
        return <Error404 />;
    }

    return <CatalogList data={catalog} />;
};

export default Catalog;
