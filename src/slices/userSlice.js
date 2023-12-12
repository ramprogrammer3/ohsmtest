import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user : localStorage.getItem("user")? JSON.parse(localStorage.getItem("user")) : null,
    token : localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null
}

const userSlice = createSlice({
    name : "user",
    initialState : initialState,
    reducers : ({
        setUser(state,value){
            state.user = value.payload
        },
        setToken(state,value){
            state.token = value.payload
        }
    })
})

export const {setToken,setUser} = userSlice.actions;
export default userSlice.reducer;