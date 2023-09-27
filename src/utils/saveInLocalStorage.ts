

export function saveUserInLocalStorage(token: string, user: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', user);
    localStorage.setItem('isAuth', 'true');
}