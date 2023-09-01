import { createSelector } from "reselect";
import { RootState } from "..";
import { IUser } from "../types/users";


const userSelector = (state: RootState) => state.user;

const savedProductsListSelector = createSelector(
  [userSelector],
  (user: IUser) => user.savedProducts,
);


const totalAmountSelector = createSelector(
  [userSelector],
  (user: IUser) => user.totalAmount,
);

export const userSel = {
 savedProductsListSelector, totalAmountSelector
};
