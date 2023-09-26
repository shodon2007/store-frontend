import { FC } from "react";
import { Link } from "react-router-dom";

import classes from "./NavBarLink.module.scss";

type NavLinkProps = {
    to: string;
    img: string;
    text: string;
    onClick?: () => void;
};

const NavBarLink: FC<NavLinkProps> = ({ to, img, text, ...props }) => {
    return (
        <Link to={to} className={classes.item} {...props}>
            <img src={img} className={classes.svg} alt={text} />
            <span className={classes.text}>{text}</span>
        </Link>
    );
};

export default NavBarLink;
