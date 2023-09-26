import classes from "./MyInput.module.scss";

const MyInput = (props: any[]) => {
    return <input {...props} className={classes.input} />;
};

export default MyInput;
