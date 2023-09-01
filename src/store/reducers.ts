import { combineReducers } from "@reduxjs/toolkit";

import { productsSlice } from "./products";
import { userSlice } from "./user";

export const reducers = () =>
  combineReducers({
    products: productsSlice.reducer,
    user: userSlice.reducer,
  });
