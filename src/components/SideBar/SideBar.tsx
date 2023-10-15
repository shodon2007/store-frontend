import { FC, memo } from "react";
import classes from "./SideBar.module.scss";
import Filter from "./components/Filter";
import Sort from "./components/Sort";
import Price from "./components/Price";

interface ISide {
    setForm: any;
    active: boolean;
    refetch: () => void;
}

const SideBar: FC<ISide> = memo(({ active, setForm, refetch }) => {
    return (
        <div className={`${classes.sidebar} ${active ? "" : classes.active}`}>
            <Sort setForm={setForm} />
            <Price setForm={setForm} />
            <Filter setForm={setForm} refetch={refetch} />
        </div>
    );
});

export default SideBar;
