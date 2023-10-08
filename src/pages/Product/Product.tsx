import { Navigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import MyTitle from "../../components/UI/title/MyTitle";
import MyButton from "../../components/UI/button/MyButton";
import Loading from "../Loading";
import Attributes from "./Attributes";
import { URL } from "../../consts/consts";
import { useProduct } from "../../hooks/useProducts";

import classes from "./Product.module.scss";
import MySubtitle from "../../components/UI/subtitle/MySubtitle";
import { useSelector } from "react-redux";
import { memo } from "react";
import Error404 from "../Error404";
import { RootState } from "../../store";
import BasketButton from "./BasketButton";

const Product = memo(() => {
    const user = useSelector((state: RootState) => state.user);
    const { type, id: stringId } = useParams();

    if (!type || !stringId) {
        return <Error404 />;
    }
    const id = +stringId;
    const { isFetching, data: product } = useProduct(type, id);

    if (isFetching) {
        return <Loading />;
    }

    if (!product) {
        return <Error404 />;
    }

    return (
        <div className={classes.product}>
            <img
                className={classes.img}
                src={`${URL}${product.img}`}
                alt="phone"
            />
            <div className={classes.body}>
                <div className={classes.top}>
                    <MyTitle>{product.name}</MyTitle>
                    {"attributes" in product ? (
                        <Attributes attributes={product.attributes} />
                    ) : (
                        ""
                    )}
                </div>
                <div className={classes.bottom}>
                    <MySubtitle>{product.price} рублей</MySubtitle>
                    <BasketButton />
                </div>
            </div>
        </div>
    );
});

export default Product;
