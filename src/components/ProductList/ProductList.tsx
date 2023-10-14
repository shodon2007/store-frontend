import classes from "./ProductList.module.scss";
import { FC, memo } from "react";
import { IProduct } from "../../types/product";
import ProductItem from "./ProductItem";
import Error404 from "../../pages/Error404";

type TypeList = {
    itemList: IProduct[];
    page: number;
};

const ProductList: FC<TypeList> = memo(({ itemList, page }) => {
    if (itemList.length === 0) {
        return <Error404 />;
    }

    const pageItems = page * 5;

    itemList = itemList.slice(pageItems, pageItems + 5);

    return (
        <div className={classes.list}>
            {itemList.map((item: IProduct) => {
                return <ProductItem item={item} />;
            })}
        </div>
    );
});

export default ProductList;
