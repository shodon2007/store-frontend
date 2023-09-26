import { memo } from "react";
import { Link } from "react-router-dom";

import classes from "./Header.module.scss";
import NavBar from "../NavBar/NavBar";
import MyTitle from "../UI/title/MyTitle";

const Header = memo(() => {
    return (
        <header className={classes.header}>
            <MyTitle>
                <Link to={"/"}>shodon store</Link>
            </MyTitle>
            <NavBar />
        </header>
    );
});

export default Header;
