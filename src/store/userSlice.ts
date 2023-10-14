import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { tryGetAuthInCookies, tryGetTokenInCookies, tryGetUserInCookies, } from "../utils/tryGetInLocalStorage";

type TypeUser = {
    isAuth: boolean;
    token: string;
    user: string;
}

type TypeLoginAction = {
    user: string,
    token: string,
}

const initialState: TypeUser = {
    isAuth: tryGetAuthInCookies(),
    token: tryGetTokenInCookies(),
    user: tryGetUserInCookies(),
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUser(state, action: PayloadAction<TypeLoginAction>) {
            state.isAuth = true;
            state.token = action.payload.token;
            state.user = action.payload.user;
        },
        exitUser(state) {
            state.isAuth = false;
            state.token = '';
            state.user = '';
            localStorage.clear();
        }
    }
});

export const { loginUser, exitUser } = userSlice.actions;
export default userSlice.reducer;