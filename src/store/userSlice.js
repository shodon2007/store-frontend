import { createSlice } from "@reduxjs/toolkit";
import { tryGetAuthInLocalStorage, tryGetTokenInLocalStorage, tryGetUserInLocalStorage } from "../utils/tryGetInLocalStorage";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isAuth: tryGetAuthInLocalStorage() ?? false,
        token: tryGetTokenInLocalStorage() ?? '',
        user: tryGetUserInLocalStorage() ?? '',
    },
    reducers: {
        loginUser(state, action) {
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