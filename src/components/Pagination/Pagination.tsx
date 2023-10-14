import { Dispatch, FC, SetStateAction } from "react";

import classes from "./Pagination.module.scss";

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
                {i + 1}
            </div>
        );
    }
    return (
        <div className={classes.pagination}>{resItems.map((item) => item)}</div>
    );
};

export default Pagination;
