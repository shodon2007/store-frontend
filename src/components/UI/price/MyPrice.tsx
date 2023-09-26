import { ReactNode } from "react";

import classes from "./MyPrice.module.scss";

const MyPrice = ({ children }: { children: ReactNode }) => {
    return <div className={classes.price}>{children}</div>;
};

export default MyPrice;
