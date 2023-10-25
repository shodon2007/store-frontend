import { Dispatch, FC, SetStateAction } from "react";

import classes from "./Pagination.module.scss";
import MyText from "../UI/text/MyText";

type TypePagination = {
    length: number;
    page: number;
    setPage: Dispatch<SetStateAction<number>>;
};

const Pagination: FC<TypePagination> = ({ length, page, setPage }) => {
    const resItems = createPaginationElems();

    function createPaginationElems() {
        const res = [];
        const pageLength = Math.ceil(length / 5);

        for (let i = 0; i < pageLength; i++) {
            const pagClasses = [classes.paginationItem];

            if (page === i) {
                pagClasses.push(classes.active);
            }

            res.push(
                <div
                    key={i}
                    className={pagClasses.join(" ")}
                    onClick={() => setPage(i)}
                >
                    <MyText>{i + 1}</MyText>
                </div>
            );
        }

        return res;
    }

    return (
        <div className={classes.pagination}>{resItems.map((item) => item)}</div>
    );
};

export default Pagination;
