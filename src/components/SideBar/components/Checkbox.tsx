import { FC } from "react";
import classes from "../SideBar.module.scss";
import MyText from "../../UI/text/MyText";

type TypeCheckbox = {
    el: string;
    title: string;
    changeFilter: (arg0: string, arg1: string, arg2: boolean) => void;
};

const Checkbox: FC<TypeCheckbox> = ({ el, title, changeFilter }) => {
    return (
        <div className={classes.description}>
            <input
                type="checkbox"
                value={el}
                onChange={(e) => {
                    changeFilter(e.target.value, title, e.target.checked);
                }}
            />
            <MyText>{el}</MyText>
        </div>
    );
};

export default Checkbox;
