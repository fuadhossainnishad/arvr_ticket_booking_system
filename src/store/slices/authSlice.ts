import { createSlice } from '@reduxjs/toolkit';

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

export const authSlice=createSlice({
    name:'SignInUp',
    initialState,
    reducers:{
        userSignIn(state){
            state.userSignIn=true;
        },
        userSignOut(state){
            state.userSignIn=false;
        },
        adminSignIn(state){
            state.adminSignIn=true;
        },
        adminSignOut(state){
            state.adminSignIn=false;
        }
    }
})

export const {userSignIn,userSignOut, adminSignIn, adminSignOut }=authSlice.actions;
export default authSlice.reducer