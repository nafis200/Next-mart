import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cartSlice";

import { persistReducer, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist'

import { couponMiddleware } from "./middlewares/coupon.middleware";
import storage from "./storage";

//! We will not do this
//! This is a global variable so we will avoid this
// const store = configureStore({});

// const persistConfig = {
//   key: 'root',
//   cartSlice,
// }

const persistConfig = {
  key: 'root',
  storage,
}


const persistedReducer = persistReducer( persistConfig, cartSlice)


export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: persistedReducer,
      // cart:cartSlice
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    middleware: (getDefaultMiddlewares: any) =>
      getDefaultMiddlewares({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(couponMiddleware),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
