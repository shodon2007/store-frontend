import { ReactNode, memo } from "react";
import classes from "./MyTitle.module.scss";

type TypeTitle = {
    children: ReactNode;
};

const MyTitle = memo(({ children, ...props }: TypeTitle) => {
    return (
        <h1 {...props} className={classes.title}>
            {children}
        </h1>
    );
});

export default MyTitle;
