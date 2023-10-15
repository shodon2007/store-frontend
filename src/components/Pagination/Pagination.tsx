import { Dispatch, FC, SetStateAction } from "react";

import classes from "./Pagination.module.scss";
import MyText from "../UI/text/MyText";

type TypePagination = {
    length: number;
    page: number;
    setPage: Dispatch<SetStateAction<number>>;
};

const Pagination: FC<TypePagination> = ({ length, page, setPage }) => {
    const resItems = [];
    const pageLength = Math.ceil(length / 5);

    for (let i = 0; i < pageLength; i++) {
        resItems.push(
            <div
                key={i}
                className={`
                ${classes.paginationItem} ${page === i ? classes.active : ""}
                `}
                onClick={() => setPage(i)}
            >
                <MyText>{i + 1}</MyText>
            </div>
        );
    }
    return (
        <div className={classes.pagination}>{resItems.map((item) => item)}</div>
    );
};

export default Pagination;
