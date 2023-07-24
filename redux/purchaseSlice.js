import { createSlice } from "@reduxjs/toolkit";

const purchase = createSlice({
  initialState: {
    user: "",
    purchaseOrder: [],
    totalCost: 0,
    quantity: [],
    productState: "",
  },
  name: "purchase",
  reducers: {
    purchaseOrder: (state, action) => {
      state.user = action.payload.user;
      state.purchaseOrder = action.payload.cart;
      state.totalCost = action.payload.grandTotal;
      state.quantity = action.payload.quantity;
      state.productState = action.payload.productState;
    },
    resetPurchaseOrder: (state, action) => {
      state.user = "";
      state.purchaseOrder = [];
      state.totalCost = 0;
      state.quantity = [];
      state.productState = [];
    },
  },
});

export const purchaseReducer = purchase.reducer;
export const { purchaseOrder, resetPurchaseOrder } = purchase.actions;
