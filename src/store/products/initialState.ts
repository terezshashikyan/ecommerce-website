import { IProduct } from "../../Components/ProductCarouselItem";

export interface IInitialProducts {
  productsList: IProduct[];
  product: IProduct | null;
  currentPage: number;
  itemsPerPage: number;
  totalPages: number;
}

export const initialProducts: IInitialProducts = {
  productsList: [],
  product: null,
  currentPage: 1,
  itemsPerPage: 6,
  totalPages: 2,
};