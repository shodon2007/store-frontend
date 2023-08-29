import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import modalSlice from "./modalSlice";

export default configureStore({
    reducer: {
        user: userSlice,
        modal: modalSlice
    }
})