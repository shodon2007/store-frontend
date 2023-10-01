import { ChangeEvent, useState } from "react";
import { fetchLogin } from "../../API/fetchAuth";
import { Link, Navigate } from "react-router-dom";
import MyInput from "../../components/UI/input/MyInput";
import MyButton from "../../components/UI/button/MyButton";

import classes from "./Auth.module.scss";
import MyText from "../../components/UI/text/MyText";
import MyTitle from "../../components/UI/title/MyTitle";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { authAction } from "./general";

const Login = () => {
    const dispatch = useDispatch();
    const userState = useSelector((state: RootState) => state.user);
    const [login, setLogin] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    if (userState.isAuth) {
        return <Navigate replace to={"/"} />;
    }

    async function loginClick(e: React.MouseEvent) {
        e.preventDefault();
        const resp = await fetchLogin(login, password);

        authAction(resp, dispatch);
    }

    return (
        <div className={classes.auth}>
            <MyTitle>Войти</MyTitle>
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
                <MyButton onClick={loginClick}>войти</MyButton>
                <Link to={"/registration"}>
                    <MyText>Нет аккаунта? Создайте его</MyText>
                </Link>
            </form>
        </div>
    );
};

export default Login;
