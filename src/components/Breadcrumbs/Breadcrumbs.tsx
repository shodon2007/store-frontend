import { FC, memo } from "react";

import classes from "./Breadcrumbs.module.scss";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Breadcrumbs: FC = memo(() => {
    const params = useParams();
    console.log(params);
    return (
        <div className={classes.breadcrumbs}>
            <Link to={"/"}>Главная</Link>
            {params.type ? (
                <>
                    {">"}
                    <Link to={`/${params.type}`}>{params.type}</Link>
                </>
            ) : (
                ""
            )}

            {params.id ? (
                <>
                    {">"}
                    <Link to={`/${params.type}/${params.id}`}>Продукт</Link>
                </>
            ) : (
                ""
            )}
        </div>
    );
});

export default Breadcrumbs;
