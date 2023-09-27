import { ReactNode, memo } from "react";

import classes from "./MyPrice.module.scss";

const MyPrice = memo(({ children }: { children: ReactNode }) => {
    return <div className={classes.price}>{children}</div>;
});

export default MyPrice;
