import { FC, memo } from "react";
import { Link } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

import classes from "./List.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { IProduct } from "../../types/product";
import { removeBasket } from "../../API/fetchBasket";
import MyText from "../UI/text/MyText";
import MyPrice from "../UI/price/MyPrice";

import trashSvg from "../../static/trash.svg";
import { URL } from "../../consts/consts";

type Props = {
    data: IProduct[];
};

const BasketList: FC<Props> = memo(({ data }) => {
    const user = useSelector((state: RootState) => state.user);
    const queryClient = useQueryClient();

    async function trashClick(id: number) {
        await removeBasket(user.user, id);
        queryClient.invalidateQueries(["getBasket", user.user]);
    }

    return (
        <div className={classes.products}>
            {data.map((product) => {
                return (
                    <div key={product.name} className={classes.product}>
                        <Link to={`/${product.type}/${product.id}`}>
                            <img
                                src={`${URL}/${product.img}`}
                                className={classes.img}
                                alt="product-img"
                            />
                        </Link>
                        <div className={classes.bottom}>
                            <Link
                                className={classes.name}
                                to={`/${product.type}/${product.id}`}
                            >
                                <MyText>{product.name}</MyText>
                                <MyPrice>{product.price} рублей</MyPrice>
                            </Link>
                            <img
                                src={trashSvg}
                                alt="trash"
                                className={classes.trash}
                                onClick={() => trashClick(product.id)}
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
});

export default BasketList;
