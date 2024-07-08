import { createSlice } from "@reduxjs/toolkit";

const initState = {
    isShow: false,
    user: {},
    datetimeData: {
        offset: null,
        localDatetime: null
    }
}

const modalSlice = createSlice({
    name: 'modal',
    initialState: initState,
    reducers:{
        openModal: (state, action) => {
            const currentDatetime = new Date(Date.now())
            const offset = currentDatetime.getTimezoneOffset();
            const localDatetime = new Date(Date.now() - (offset * 60000));
            return {
                ...state, 
                isShow: true, 
                user: action.payload, 
                localDatetime: localDatetime.toISOString()
            }
        },
        closeModal: (state) => {
            return {...state, isShow: false, user: {}}
        }
    }
})

export const {openModal, closeModal} = modalSlice.actions

export default modalSlice.reducer;