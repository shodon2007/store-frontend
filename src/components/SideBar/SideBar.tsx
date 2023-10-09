import { FC, memo } from "react";
import { useFilter } from "../../hooks/useFilter";
import { useParams } from "react-router-dom";
import classes from "./SideBar.module.scss";
import Loading from "../../pages/Loading";
import Filter from "./components/Filter";
import Sort from "./components/Sort";

interface ISide {
    setForm: any;
    refetch: any;
}

const SideBar: FC<ISide> = memo(({ setForm, refetch }) => {
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
                <Sort setForm={setForm} />
                <Filter data={data} setForm={setForm} refetch={refetch} />
            </div>
        </div>
    );
});

export default SideBar;
