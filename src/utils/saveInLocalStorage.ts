import Cookies from 'js-cookie';

export function saveUserInCookies(token: string, user: string) {
    Cookies.set('token', token);
    Cookies.set('user', user);
    Cookies.set('isAuth', 'true');
}