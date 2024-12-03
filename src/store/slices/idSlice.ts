import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IdInterface{
userid:number;
adminid:number;
}

const initialId:IdInterface = {
    userid:0,
    adminid:0
}

export const idSlice = createSlice({
    name:'id',
    initialState:initialId,
    reducers:{
        setUserid(state,action:PayloadAction<number>){
            state.userid = action.payload
        },
        setAdminid(state,action:PayloadAction<number>){
            state.adminid = action.payload
        }
    }
})

export const {setUserid,setAdminid} = idSlice.actions
export default idSlice.reducer