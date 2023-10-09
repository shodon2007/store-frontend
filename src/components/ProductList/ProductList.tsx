import classes from "./ProductList.module.scss";
import { FC, memo } from "react";
import { IProduct } from "../../types/product";
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
