import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    isSignUp: false,
    error: null,
  },
  reducers: {
    loginRequest: (state) => {
      state.isLoggedIn = false;
    },
    loginSuccess: (state, action) => {
      const { message } = action.payload;

      state.isLoggedIn = true;
      state.isSignUp = message === "유저 등록 성공" ? true : false;
    },
    loginFailure: (state, action) => {
      const { message, status } = action.payload;

      state.error = {
        message,
        status,
      };

      state.isLoggedIn = false;
    },
    logoutRequest: (state) => {
      state.isLoggedIn = false;
      state.isSignUp = false;
    },
  },
});

export const { loginRequest, loginSuccess, loginFailure, logoutRequest } =
  authSlice.actions;

export default authSlice.reducer;
