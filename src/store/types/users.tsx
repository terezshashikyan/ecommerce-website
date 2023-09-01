import { IProduct } from "../../Components/ProductCarouselItem";

export interface IUser {
    email: string;
    savedProducts: IProduct[] | [];
    totalAmount? : number;
  };
  
  