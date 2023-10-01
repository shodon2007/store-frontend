import { FC } from "react";
import { useFilter } from "../../hooks/useFilter";
import { useParams } from "react-router-dom";
import classes from "./SideBar.module.scss";
import MySubtitle from "../UI/subtitle/MySubtitle";
import Loading from "../../pages/Loading";

type TypeSide = {
    brand: string;
    setBrand: (brand: string) => void;
};

const SideBar: FC<TypeSide> = ({ brand, setBrand }) => {
    console.log("обновляется наш sidebar");
    const { type } = useParams();
    const { isFetching, data } = useFilter(type);

    if (isFetching) {
        return <Loading />;
    }

    if (!data || data.length === 0) {
        return <div></div>;
    }

    return (
        <div className={classes.sidebar}>
            <MySubtitle>Производители</MySubtitle>
            <div className={classes.list}>
                <button
                    onClick={() => setBrand("all")}
                    className={`${classes.button} ${
                        brand === "all" ? classes.active : ""
                    }`}
                >
                    Все
                </button>
                {data.map((brandItem) => {
                    return (
                        <button
                            key={brandItem.name}
                            onClick={() => setBrand(brandItem.name)}
                            className={`${classes.button} ${
                                brandItem.name === brand ? classes.active : ""
                            }`}
                        >
                            {brandItem.name}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default SideBar;
