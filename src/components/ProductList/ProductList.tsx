import classes from "./ProductList.module.scss";
import { FC, memo } from "react";
import { IProduct } from "../../types/product";
import { Link } from "react-router-dom";
import MyText from "../UI/text/MyText";
import MyPrice from "../UI/price/MyPrice";
import { ICatalog } from "../../types/catalog";
import { URL } from "../../consts/consts";
import MyTitle from "../UI/title/MyTitle";

type TypeList = {
    itemList: IProduct[] | ICatalog[];
};

const ProductItem = (item: IProduct) => {
    return (
        <Link key={item.id} className={classes.item} to={`${item.id}`}>
            <img
                className={classes.img}
                src={`${URL}/${item.img}`}
                alt="product-img"
            />
            <div className={classes.bottom}>
                <MyText>{item.name}</MyText>
                <MyPrice>{item.price} рублей</MyPrice>
            </div>
        </Link>
    );
};

const CatalogItem = (item: ICatalog) => {
    return (
        <Link key={item.id} className={classes.item} to={`${item.name}`}>
            <img
                className={classes.img}
                src={`${URL}/${item.img}`}
                alt="product-img"
            />
            <div className={classes.bottom}>
                <MyText>{item.name_ru}</MyText>
            </div>
        </Link>
    );
};

const ProductList: FC<TypeList> = memo(({ itemList }) => {
    if (itemList.length === 0) {
        return <MyTitle>Ничего не найдено((</MyTitle>;
    }

    return (
        <div className={classes.list}>
            {itemList.map((item) => {
                return "price" in item
                    ? ProductItem(item as IProduct)
                    : CatalogItem(item as ICatalog);
            })}
        </div>
    );
});

export default ProductList;
