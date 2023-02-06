import { configureStore } from "@reduxjs/toolkit";
import seatReducer from "./slices/seatSlice";
import bookingReducer from "./slices/bookingSlice";
import userSlice from "./slices/userSlice";
import waitingListSlice from "./slices/waitingListSlice";
import { aerolineDB } from "../../earolineDB";
import { saveState } from "../helpers/helpers";

if (!JSON.parse(localStorage.getItem("aeroline")))
  saveState("aeroline", aerolineDB);

export default configureStore({
  reducer: {
    seat: seatReducer,
    booking: bookingReducer,
    user: userSlice,
    waitingList: waitingListSlice,
  },
  preloadedState: JSON.parse(localStorage.getItem("aeroline")),
});
