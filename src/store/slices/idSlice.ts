import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IdInterface {
  userid: number;
  adminid: number;
  editeventid: number;
}

const initialId: IdInterface = {
  userid: 0,
  adminid: 0,
  editeventid: 0,
};

export const idSlice = createSlice({
  name: "id",
  initialState: initialId,
  reducers: {
    setUserid(state, action: PayloadAction<number>) {
      state.userid = action.payload;
    },
    setAdminid(state, action: PayloadAction<number>) {
      state.adminid = action.payload;
    },
    setEditEventid(state, action: PayloadAction<number>) {
      state.editeventid = action.payload;
    },
  },
});

export const { setUserid, setAdminid, setEditEventid } = idSlice.actions;
export default idSlice.reducer;
