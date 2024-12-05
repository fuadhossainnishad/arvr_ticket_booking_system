import { configureStore } from "@reduxjs/toolkit";
import idReducer from './slices/idSlice'
import authReducer from './slices/authSlice'
export const store=configureStore({
    reducer:{
        id:idReducer,
        auth:authReducer,
    },
})

export type RooteState = ReturnType<typeof store.getState> 
export type AppDispatch = typeof store.dispatch