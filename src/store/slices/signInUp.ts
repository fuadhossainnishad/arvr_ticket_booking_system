import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SignInUpInterface{
    userSignIn: boolean;
    userSignUp: boolean;
    adminSignIn: boolean;
    adminSignUp: boolean;
}

const initialState: SignInUpInterface={
    userSignIn: false,
    userSignUp: false,
    adminSignIn: false,
    adminSignUp: false,
}

export const signInUpSlice=createSlice({
    name:'SignInUp',
    initialState,
    reducers:{
        setUserSignIn(state,action:PayloadAction<boolean>){
            state.userSignIn=action.payload;
        },
        setUserSignOut(state,action:PayloadAction<boolean>){
            state.userSignUp=action.payload;
        },
        setAdminSignIn(state,action:PayloadAction<boolean>){
            state.userSignIn=action.payload;
        },
        setAdminSignOut(state,action:PayloadAction<boolean>){
            state.userSignUp=action.payload;
        }
    }
})

export const {setUserSignIn,setUserSignOut, setAdminSignIn, setAdminSignOut }=signInUpSlice.actions;
export default signInUpSlice.reducer