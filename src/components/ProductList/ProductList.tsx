import { Link, useParams } from "react-router-dom";

import { URL } from "../../consts/consts";
import { useProducts } from "../../hooks/useProducts";
import Error404 from "../../pages/Error404";
import MyText from "../UI/text/MyText";
import MyPrice from "../UI/price/MyPrice";

import classes from "./ProductList.module.scss";
import Loading from "../../pages/Loading";
import { FC } from "react";

type TypeList = {
    brand: string;
};

const ProductList: FC<TypeList> = ({ brand }) => {
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
        <div className={classes.list}>
            {data.map((product) => {
                return (
                    <Link
                        key={product.name}
                        className={classes.product}
                        to={`${product.id}`}
                    >
                        <img
                            className={classes.img}
                            src={`${URL}/${product.img}`}
                            alt="product-img"
                        />
                        <div className={classes.bottom}>
                            <MyText>{product.name}</MyText>
                            <MyPrice>{product.price} рублей</MyPrice>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};

export default ProductList;
