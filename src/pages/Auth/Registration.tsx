import React, { useState } from "react";
import { registration } from "../../API/fetchAuth";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../store/userSlice";
import { Link, Navigate } from "react-router-dom";
import { saveUserInLocalStorage } from "../../utils/saveInLocalStorage";
import MyInput from "../../components/UI/input/MyInput";
import MyButton from "../../components/UI/button/MyButton";
import MyTitle from "../../components/UI/title/MyTitle";
import { toast } from "react-toastify";

import classes from "./Auth.module.scss";
import MyText from "../../components/UI/text/MyText";

const Registration = () => {
    const dispatch = useDispatch();
    const userState = useSelector((state) => state.user);
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    async function registrationClick(e: any) {
        e.preventDefault();
        const resp = await registration(login, password);

        if (resp.status === "error") {
            return toast.error(resp.message);
        }

        successLogin(resp);
    }

    function successLogin(resp) {
        dispatch(loginUser({ token: resp.token, user: resp.user }));
        toast.success(resp.message);
        saveUserInLocalStorage(resp.token, resp.user);
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
                    onChange={(e) => setLogin(e.target.value)}
                />
                <MyInput
                    placeholder="пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
