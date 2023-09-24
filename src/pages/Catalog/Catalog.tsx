import { FC } from "react";
import { Link } from "react-router-dom";

import { URL } from "../../consts/consts";
import MyText from "../../components/UI/text/MyText";
import Loading from "../Loading";
import Error404 from "../Error404";
import { useCatalog } from "../../hooks/useCatalog";

import classes from "./Catalog.module.scss";

const Catalog: FC = () => {
    const { isLoading, error, data: catalog } = useCatalog();

    if (isLoading) {
        return <Loading />;
    }

    if (error) {
        return <Error404 />;
    }

    return (
        <div className={classes.catalog}>
            {catalog.map((catalogItem, index) => {
                return (
                    <Link
                        to={`/${catalogItem.name}`}
                        key={index}
                        className={classes.item}
                    >
                        <img
                            className={classes.img}
                            src={`${URL}${catalogItem.img}`}
                            alt="catalog img"
                        />
                        <MyText>{catalogItem.name_ru}</MyText>
                    </Link>
                );
            })}
        </div>
    );
};

export default Catalog;
