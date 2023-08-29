import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: 'user',
    initialState: {
        type: 'good',
        show: false,
        text: 'Этого текста не должно быть!'
    },
    reducers: {
        showModal(state, action) {
            state.show = true;
            state.text = action.payload.text;
            state.type = action.payload.type;
        },
        removeModal(state) {
            state.show = false;
        }
    }
});

export const { showModal, removeModal } = modalSlice.actions;
export default modalSlice.reducer;