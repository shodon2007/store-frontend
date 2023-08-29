export function saveUserInLocalStorage(token, user) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', user);
    localStorage.setItem('isAuth', true);
}