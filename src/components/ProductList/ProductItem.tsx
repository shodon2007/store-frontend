import { FC, memo } from "react";
import { IProduct } from "../../types/product";
import { Link } from "react-router-dom";

type Props = {
    item: IProduct;
};

import classes from "./ProductList.module.scss";
import MyText from "../UI/text/MyText";
import MyPrice from "../UI/price/MyPrice";
import { URL } from "../../consts/consts";

const ProductItem: FC<Props> = memo(({ item }) => {
    console.log(item);
    return (
        <Link key={item.id} className={classes.item} to={`${item.id}`}>
            <img
                className={classes.img}
                src={`${URL}/${item.img}`}
                alt="product-img"
            />
            <MyText>{`${item.name}`}</MyText>
            <MyPrice>{item.price} ₽</MyPrice>
        </Link>
    );
});

export default ProductItem;
