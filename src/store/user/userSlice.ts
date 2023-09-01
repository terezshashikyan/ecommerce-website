import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialUser } from "./initialState";
import { IProduct } from "../../Components/ProductCarouselItem";
import { IUser } from "../types/users";

export const userSlice = createSlice({
  name: "user",
  initialState: initialUser,

  reducers: {
    setSavedProductsList(state: IUser, action: PayloadAction<IProduct[]>) {
      state.savedProducts = action.payload;
    },

    setTotalAmount(state: IUser, action: PayloadAction<number>) {
      state.totalAmount = action.payload;
    },

  },
});

export const { setSavedProductsList, setTotalAmount} = userSlice.actions;
