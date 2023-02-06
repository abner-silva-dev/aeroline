import { createSlice } from "@reduxjs/toolkit";
import { aerolineDB } from "../../../earolineDB";

export const seatSlice = createSlice({
  name: "seat",
  initialState: {
    currentSeat: {
      seatNumber: 0,
      seatChoose: false,
    },
    seats: aerolineDB.seat.seats,
  },
  reducers: {
    setCurrentSeat: (state, action) => {
      state.currentSeat = action.payload;
    },
    setConfirmSeat: (state, action) => {
      state.seats = action.payload.seats;
    },
  },
});

export const { setCurrentSeat, setConfirmSeat } = seatSlice.actions;

export default seatSlice.reducer;
