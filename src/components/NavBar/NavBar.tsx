import { toast } from "react-toastify";

import NavBarLink from "../UI/navBarLink/NavBarLink";
import { exitUser } from "../../store/userSlice";

import basketSvg from "../../static/basket.svg";
import userSvg from "../../static/user.svg";

import classes from "./NavBar.module.scss";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

const NavBar: FC = () => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    function exitClick() {
        dispatch(exitUser());
        toast.success("Вы успешно вышли из аккаунта");
    }

    return (
        <nav className={classes.nav}>
            {user.isAuth ? (
                <>
                    <NavBarLink to="/basket" img={basketSvg} text="корзина" />
                    <NavBarLink
                        to="#"
                        img={userSvg}
                        text="Выйти"
                        onClick={exitClick}
                    />
                </>
            ) : (
                <NavBarLink to="/login" img={userSvg} text="Войти" />
            )}
        </nav>
    );
};

export default NavBar;
