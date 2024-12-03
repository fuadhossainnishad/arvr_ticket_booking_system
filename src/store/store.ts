import { configureStore } from "@reduxjs/toolkit";
import idReducer from './slices/idSlice'
export const store=configureStore({
    reducer:{
        id:idReducer
    },
})

export type RooteState = ReturnType<typeof store.getState> 
export type AppDispatch = typeof store.dispatch