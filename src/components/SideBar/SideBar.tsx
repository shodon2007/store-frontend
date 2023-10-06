import { FC } from "react";
import { useFilter } from "../../hooks/useFilter";
import { useParams } from "react-router-dom";
import classes from "./SideBar.module.scss";
import Loading from "../../pages/Loading";
import MyButton from "../UI/button/MyButton";
import Filter from "./components/Filter";

interface ISide {
    setForm: any;
    refetch: any;
}

const SideBar: FC<ISide> = ({ setForm, refetch }) => {
    const { type } = useParams();
    const { isFetching, data } = useFilter(type);

    if (isFetching) {
        return <Loading />;
    }

    if (!data) {
        return <div></div>;
    }

    return (
        <div className={classes.sidebar}>
            <div className={classes.list}>
                <Filter data={data} setForm={setForm} />

                <MyButton onClick={() => refetch()}>Применить</MyButton>
            </div>
        </div>
    );
};

export default SideBar;
