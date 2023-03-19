import { createSlice } from "@reduxjs/toolkit";


export const loginSlice = createSlice({
    initialState: false,
    name: "login",
    reducers:{
        isLogin:(state, action)=>{
          return state =  action.payload        
        }
    }
});
export const {isLogin} = loginSlice.actions;
export default loginSlice.reducer;
