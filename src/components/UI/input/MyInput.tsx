import { InputHTMLAttributes } from "react";
import classes from "./MyInput.module.scss";

const MyInput = (props: InputHTMLAttributes<HTMLInputElement>) => {
    return <input {...props} className={classes.input} />;
};

export default MyInput;
