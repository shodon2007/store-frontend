import { toast } from "react-toastify";
import { TypeAuthReturn } from "../../types/auth";
import { loginUser } from "../../store/userSlice";
import { saveUserInCookies } from "../../utils/saveInLocalStorage";

export function authAction(resp: TypeAuthReturn, dispatch: any) {
    if (resp.status === "error") {
        return toast.error(resp.message);
    }

    successAuth(resp, dispatch);
}

function successAuth(resp: TypeAuthReturn, dispatch: any) {
    if ('token' in resp && 'user' in resp) {
        dispatch(loginUser({ token: resp.token, user: resp.user }));
        toast.success(resp.message);
        saveUserInCookies(resp.token, resp.user);
    }
}