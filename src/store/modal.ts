import { createSlice } from "@reduxjs/toolkit";

const initialModalState: { showModal: boolean } = { showModal: false };

const modalSlice = createSlice({
  name: "modal",
  initialState: initialModalState,
  reducers: {
    displayModal: (state) => {
        state.showModal = true;
    },
    hideModal: (state) => {
        state.showModal = false;
    },
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice.reducer;
