import Cookies from 'js-cookie';

export function tryGetTokenInCookies() {
    return Cookies.get('token') || '';
}

export function tryGetUserInCookies() {
    return Cookies.get('user') || '';
}

export function tryGetAuthInCookies() {
    return !!Cookies.get('isAuth');
}