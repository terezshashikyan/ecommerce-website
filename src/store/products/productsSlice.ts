import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IInitialProducts, initialProducts } from "./initialState";
import { IProduct } from "../../Components/ProductCarouselItem";

export const productsSlice = createSlice({
  name: "products",
  initialState: initialProducts,
  reducers: {
    setProducts(state: IInitialProducts, action: PayloadAction<IProduct[]>) {
      state.productsList = action.payload;
    },

    setProduct(state: IInitialProducts, action: PayloadAction<IProduct>) {
      state.product = action.payload;
    },

    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },

    setTotalPages: (state, action: PayloadAction<number>) => {
      state.totalPages = action.payload;
    },
  },
});


export const { setCurrentPage, setTotalPages } = productsSlice.actions;
