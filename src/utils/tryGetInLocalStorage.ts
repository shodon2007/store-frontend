export function tryGetTokenInLocalStorage(): string {
    const token = localStorage.getItem('token');
    return token ?? '';
}
export function tryGetUserInLocalStorage(): string {
    const user = localStorage.getItem('user');
    return user ?? '';
}

export function tryGetAuthInLocalStorage(): boolean {
    const isAuth = !!localStorage.getItem('isAuth');
    return isAuth;
}