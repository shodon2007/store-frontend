import { ReactNode, memo } from "react";
import classes from "./MyButton.module.scss";

const MyButton = memo(({ children, ...props }: { children: ReactNode }) => {
    return (
        <button {...props} className={classes.button}>
            {children}
        </button>
    );
});

export default MyButton;
