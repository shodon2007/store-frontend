import classes from "./ProductList.module.scss";
import { FC, memo } from "react";
import { IProduct } from "../../types/product";
import { Link } from "react-router-dom";
import MyText from "../UI/text/MyText";
import MyPrice from "../UI/price/MyPrice";
import { URL } from "../../consts/consts";
import MyTitle from "../UI/title/MyTitle";
import ProductItem from "./ProductItem";

type TypeList = {
    itemList: IProduct[];
};

const ProductList: FC<TypeList> = memo(({ itemList }) => {
    if (itemList.length === 0) {
        return <MyTitle>Ничего не найдено((</MyTitle>;
    }

    return (
        <div className={classes.list}>
            {itemList.map((item: IProduct) => {
                return <ProductItem item={item} />;
            })}
        </div>
    );
});

export default ProductList;
