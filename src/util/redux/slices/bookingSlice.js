import { createSlice } from "@reduxjs/toolkit";

export const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    bookings: [],
  },
  reducers: {
    setBooking: (state, action) => {
      state.bookings.push(action.payload.booking);
    },
    setBookings: (state, action) => {
      state.bookings = action.payload.bookings;
    },
  },
});

export const { setBooking, setBookings } = bookingSlice.actions;

export default bookingSlice.reducer;
