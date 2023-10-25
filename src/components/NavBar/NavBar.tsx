import { toast } from "react-toastify";

import NavBarLink from "../UI/navBarLink/NavBarLink";
import { exitUser } from "../../store/userSlice";

import basketSvg from "../../static/basket.svg";
import userSvg from "../../static/user.svg";

import classes from "./NavBar.module.scss";
import { FC, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";

const NavBar: FC = memo(() => {
    const user = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();

    function exitClick() {
        dispatch(exitUser());
        toast.success("Вы успешно вышли из аккаунта");
    }

    if (user.isAuth) {
        return (
            <nav className={classes.nav}>
                <NavBarLink to="/basket" img={basketSvg} />
                <NavBarLink to="#" img={userSvg} onClick={exitClick} />
            </nav>
        );
    }

    return (
        <nav className={classes.nav}>
            <NavBarLink to="/login" img={userSvg} />
        </nav>
    );
});

export default NavBar;
