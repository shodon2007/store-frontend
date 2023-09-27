import { ChangeEvent, MouseEventHandler, useState } from "react";
import { fetchLogin } from "../../API/fetchAuth";
import { loginUser } from "../../store/userSlice";
import { Link, Navigate } from "react-router-dom";
import { saveUserInLocalStorage } from "../../utils/saveInLocalStorage";
import MyInput from "../../components/UI/input/MyInput";
import MyButton from "../../components/UI/button/MyButton";
import { toast } from "react-toastify";

import classes from "./Auth.module.scss";
import MyText from "../../components/UI/text/MyText";
import MyTitle from "../../components/UI/title/MyTitle";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
    const dispatch = useDispatch();
    const userState = useSelector((state) => state.user);
    const [login, setLogin] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    if (userState.isAuth) {
        return <Navigate replace to={"/"} />;
    }

    async function loginClick(e: React.MouseEvent) {
        e.preventDefault();
        const resp = await fetchLogin(login, password);
        if (resp.status === "error") {
            return toast.error(resp.message);
        }
        dispatch(loginUser({ token: resp.token, user: resp.user }));
        toast.success(resp.message);
        saveUserInLocalStorage(resp.token, resp.user);
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
