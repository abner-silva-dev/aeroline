import { createSlice } from "@reduxjs/toolkit";

export const waitingListSlice = createSlice({
  name: "waitingList",
  initialState: {
    waitingList: [],
  },
  reducers: {
    setWaitingList: (state, action) => {
      state.waitingList.push(action.payload.waitingList);
    },
    setWaitingLists: (state, action) => {
      state.waitingList = action.payload.waitingList;
    },
  },
});

export const { setWaitingList, setWaitingLists } = waitingListSlice.actions;

export default waitingListSlice.reducer;
