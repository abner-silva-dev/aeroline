import { configureStore } from "@reduxjs/toolkit";
import seatReducer from "./slices/seatSlice";
import bookingReducer from "./slices/bookingSlice";

export default configureStore({
  reducer: {
    seat: seatReducer,
    booking: bookingReducer,
  },
});
