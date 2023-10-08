import { ReactNode, memo } from "react";

import classes from "./MyText.module.scss";

const MyText = memo(({ children }: { children: ReactNode }) => {
    return <div className={classes.text}>{children}</div>;
});

export default MyText;
