import { ChangeEvent, MouseEvent, useState } from "react";
import { registration } from "../../API/fetchAuth";
import { Link, Navigate } from "react-router-dom";
import MyInput from "../../components/UI/input/MyInput";
import MyButton from "../../components/UI/button/MyButton";
import MyTitle from "../../components/UI/title/MyTitle";

import classes from "./Auth.module.scss";
import MyText from "../../components/UI/text/MyText";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { authAction } from "./general";

const Registration = () => {
    const dispatch = useDispatch();
    const userState = useSelector((state: RootState) => state.user);
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    async function registrationClick(e: MouseEvent) {
        e.preventDefault();
        const resp = await registration(login, password);

        authAction(resp, dispatch);
    }

    if (userState.isAuth) {
        return <Navigate replace to={"/"} />;
    }

    return (
        <div className={classes.auth}>
            <MyTitle>Регистрация</MyTitle>
            <form className={classes.form}>
                <MyInput
                    placeholder="имя пользователя"
                    value={login}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setLogin(e.target.value)
                    }
                />
                <MyInput
                    placeholder="пароль"
                    value={password}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setPassword(e.target.value)
                    }
                />
                <MyButton onClick={registrationClick}>
                    зарегестрироваться
                </MyButton>
                <Link to={"/login"}>
                    <MyText>Уже есть аккаунт? Войдите</MyText>
                </Link>
            </form>
        </div>
    );
};

export default Registration;
