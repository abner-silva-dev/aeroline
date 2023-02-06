import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: {
      fullName: "",
      phoneNumber: 0,
      seat: 0,
    },
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload.currentUser;
    },
  },
});

export const { setCurrentUser } = userSlice.actions;

export default userSlice.reducer;
