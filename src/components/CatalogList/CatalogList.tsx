import { FC } from "react";
import { ICatalog } from "../../types/catalog";
import { Link } from "react-router-dom";
import MyText from "../UI/text/MyText";
import { URL } from "../../consts/consts";

import classes from "./styles.module.scss";

type Props = {
    data: ICatalog[];
};

const CatalogList: FC<Props> = ({ data }) => {
    return (
        <div className={classes.list}>
            {data.map((item) => {
                return (
                    <Link
                        key={item.id}
                        to={`${item.name}`}
                        className={classes.item}
                    >
                        <img
                            src={`${URL}/${item.img}`}
                            className={classes.img}
                            alt="product-img"
                        />
                        <div>
                            <MyText>{item.name_ru}</MyText>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};

export default CatalogList;
