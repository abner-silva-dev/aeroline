import { createSlice } from "@reduxjs/toolkit";
import { aerolineDB } from "../../../earolineDB";

export const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    fullName: "",
    phoneNumber: 0,
    seat: 0,
    bookings: [],
    seats: aerolineDB.airplane.seats,
    waitingList: [],
  },
  reducers: {
    setFullName: (state, action) => {
      state.fullName = action.payload.fullName;
    },
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload.phoneNumber;
    },
    setNumberSeat: (state, action) => {
      state.seat = action.payload.seat;
    },
    setBooking: (state, action) => {
      state.bookings.push(action.payload.booking);
    },
    confirmSeat: (state, action) => {
      state.seats = action.payload.seats;
    },
    setWaitingList: (state, action) => {
      state.waitingList.push(action.payload.waitingList);
    },
    setBookings: (state, action) => {
      state.bookings = action.payload.bookings;
    },
  },
});

export const {
  setFullName,
  setPhoneNumber,
  setNumberSeat,
  setBooking,
  confirmSeat,
  setWaitingList,
  setBookings,
} = bookingSlice.actions;

export default bookingSlice.reducer;
