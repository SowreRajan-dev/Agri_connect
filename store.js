import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { cartReducer } from "./redux/cartSlice";
import { orderReducer } from "./redux/orderSlice";
import { userReducer } from "./redux/userSlice";
import { adminReducer } from "./redux/adminSlice";
import { purchaseReducer } from "./redux/purchaseSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  order: orderReducer,
  admin: adminReducer,
  purchase: purchaseReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
export let persistor = persistStore(store);
