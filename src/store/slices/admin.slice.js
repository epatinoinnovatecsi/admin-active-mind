import { createSlice } from "@reduxjs/toolkit"
import axiosApiBam from "../../utils/axiosConfig"


const initState = {
    user: "",
    email: "",
    token: "",
}

const adminSlice = createSlice({
    name: "admin",
    initialState: localStorage.getItem('am-admin')? JSON.parse(localStorage.getItem('am-admin')): initState,
    reducers:{
        setLoginData: (state, action) => {
            const loginData = action.payload
            const newState = {...state, ...loginData}
            localStorage.setItem('am-admin', JSON.stringify(newState))
            return newState
        },
        logout: () => {
            localStorage.removeItem('am-admin')
            return initState
        }
    }
})

export const login = (data, navigate) => (dispatch) => {
    axiosApiBam
      .post("/admins/login", data)
      .then(({ data }) => {
        dispatch(setLoginData(data));
        navigate("/")
      })
      .catch((err) => {
        console.log(err);
      });
  };

export const {setLoginData, logout} = adminSlice.actions



export default adminSlice.reducer;
