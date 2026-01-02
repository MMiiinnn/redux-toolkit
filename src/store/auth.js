import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: false,
  account: {
    email: "",
    password: "",
  },
};

const authSlice = createSlice({
  name: "Authentication",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.account = {
        email: action.payload.email,
        password: action.payload.password,
      };
    },
    logout(state) {
      state.isAuthenticated = false;
      state.account = {
        email: "",
        password: "",
      };
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
