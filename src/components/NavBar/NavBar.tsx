import { toast } from "react-toastify";

import NavBarLink from "../UI/navBarLink/NavBarLink";
import { exitUser } from "../../store/userSlice";

import basketSvg from "../../static/basket.svg";
import userSvg from "../../static/user.svg";

import classes from "./NavBar.module.scss";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";

const NavBar: FC = () => {
    const user = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();

    function exitClick() {
        dispatch(exitUser());
        toast.success("Вы успешно вышли из аккаунта");
    }

    return (
        <nav className={classes.nav}>
            {user.isAuth ? (
                <>
                    <NavBarLink to="/basket" img={basketSvg} />
                    <NavBarLink to="#" img={userSvg} onClick={exitClick} />
                </>
            ) : (
                <NavBarLink to="/login" img={userSvg} />
            )}
        </nav>
    );
};

export default NavBar;
