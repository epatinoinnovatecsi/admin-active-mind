import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./slices/modal.slice";
import adminSlice from "./slices/admin.slice";

export default configureStore({
        reducer: {
            admin: adminSlice,
            modal: modalSlice
        },
    })