import { createSlice } from "@reduxjs/toolkit";

export const seatSlice = createSlice({
  name: "seat",
  initialState: {
    seat: {
      seatNumber: 0,
      seatChoose: false,
    },
  },
  reducers: {
    chooseSeat: (state, action) => {
      state.seat = action.payload;
    },
  },
});

export const { chooseSeat } = seatSlice.actions;

export default seatSlice.reducer;
