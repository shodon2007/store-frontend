import React, { useState } from 'react'
import { fetchLogin } from '../../API/fetchAuth';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../store/userSlice';
import { Link, Navigate } from 'react-router-dom';
import { saveUserInLocalStorage } from '../../utils/saveInLocalStorage';
import MyInput from '../../components/UI/input/MyInput';
import MyButton from '../../components/UI/button/MyButton';
import { toast } from 'react-toastify';

const Login = () => {
    const dispatch = useDispatch();
    const userState = useSelector(state => state.user);
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    async function loginClick(e) {
        e.preventDefault();
        const resp = await fetchLogin(login, password);
        if (resp.status === 'error') {
            return toast.error(resp.message);
        }
        dispatch(loginUser({ token: resp.token, user: resp.user }));
        toast.success(resp.message);
        saveUserInLocalStorage(resp.token, resp.user);
    }
    if (userState.isAuth) {
        return <Navigate replace to={'/'} />
    }

    return (
        <div className='login auth'>
            <h1>Войти</h1>
            <form>
                <MyInput placeholder='имя пользователя' value={login} onChange={e => setLogin(e.target.value)} />
                <MyInput placeholder='пароль' value={password} onChange={e => setPassword(e.target.value)} />
                <MyButton onClick={loginClick}>войти</MyButton>
                <Link to={'/registration'}>Нет аккаунта? Создайте его</Link>
            </form>
        </div>
    )
}

export default Login