import { createSelector } from "reselect";
import { RootState } from "..";
import { IInitialProducts } from "./initialState";

const productsSelector = (state: RootState) => state.products;

const productsListSelector = createSelector(
  [productsSelector],
  (products: IInitialProducts) => products.productsList
);

const productSelector = createSelector(
  [productsSelector],
  (products: IInitialProducts) => products.product
);

export const selectFourProducts = createSelector(
  [productsSelector],
  (products: IInitialProducts) => products.productsList.slice(0,5)
);

export const productsSel = {
  productsSelector,
  productsListSelector,
  productSelector,
};
