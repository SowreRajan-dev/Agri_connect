import { createSlice } from "@reduxjs/toolkit";

const order = createSlice({
  initialState: [],
  name: "order",
  reducers: {
    addToOrder: (state, action) => {
      state.push(action.payload);
    },
    removeFromOrder: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);
      state.splice(index, 1);
    },
    resetOrder: (state, action) => {
      state.splice(0, state.length);
    },
  },
});

export const orderReducer = order.reducer;
export const { addToOrder, removeFromOrder, resetOrder } = order.actions;
