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

const SideBar: FC<TypeSide> = () => {
    console.log("обновляется наш sidebar");
    const { type } = useParams();
    const { isFetching, data } = useFilter(type);

    if (isFetching) {
        return <Loading />;
    }

    if (!data || data.length === 0) {
        return <div></div>;
    }

    console.log(data);

    return (
        <div className={classes.sidebar}>
            <MySubtitle>Производители</MySubtitle>
            <div className={classes.list}></div>
        </div>
    );
};

export default SideBar;
