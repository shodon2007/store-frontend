import { ReactNode } from "react";

import classes from "./MySubtitle.module.scss";

const MySubtitle = ({ children }: { children: ReactNode }) => {
    return <div className={classes.subtitle}>{children}</div>;
};

export default MySubtitle;
