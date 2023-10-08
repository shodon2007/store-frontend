import { InputHTMLAttributes, memo } from "react";
import classes from "./MyInput.module.scss";

const MyInput = memo((props: InputHTMLAttributes<HTMLInputElement>) => {
    return <input {...props} className={classes.input} />;
});

export default MyInput;
