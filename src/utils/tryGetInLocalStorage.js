export function tryGetTokenInLocalStorage() {
    const token = localStorage.getItem('token');
    return token;
}
export function tryGetUserInLocalStorage() {
    const user = localStorage.getItem('user');
    return user;
}

export function tryGetAuthInLocalStorage() {
    const isAuth = localStorage.getItem('isAuth');
    return isAuth;
}