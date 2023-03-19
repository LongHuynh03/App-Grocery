import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducerClickTime } from "./reducer/clickTime";
import loginReducer from "./reducer/isLogin";


import { userReducer } from "./reducer/reducer";

const rootStore = combineReducers({
    changeTime: reducerClickTime,
    user: userReducer,
    // isLogin: loginReducer
})
const store = configureStore({
    reducer: {
        // rootStore,
        login: loginReducer
    }
})

export default store