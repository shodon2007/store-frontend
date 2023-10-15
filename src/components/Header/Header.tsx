import { FC } from "react";
import { Link } from "react-router-dom";

import classes from "./Header.module.scss";
import NavBar from "../NavBar/NavBar";

const Header: FC = () => {
    return (
        <header className={classes.header}>
            <div className={classes.headerContent}>
                <Link to={"/"}>shodon store</Link>
                <NavBar />
            </div>
        </header>
    );
};

export default Header;
