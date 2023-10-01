import { FC, ReactNode, memo } from "react";
import classes from "./MyButton.module.scss";

type MyButtonProps = {
    children: ReactNode;
    onClick?: (e: any) => any;
};

const MyButton: FC<MyButtonProps> = memo(({ children, ...props }) => {
    return (
        <button {...props} className={classes.button}>
            {children}
        </button>
    );
});

export default MyButton;
