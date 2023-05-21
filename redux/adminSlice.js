import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    isLoggedIn: false,
    admin: {},
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.admin = action.payload;
    },
    logout: (state, action) => {
      state.isLoggedIn = false;
      state.admin = {};
      localStorage.removeItem("admin");
    },
  },
});

export const adminReducer = adminSlice.reducer;
export const { login, logout } = adminSlice.actions;
