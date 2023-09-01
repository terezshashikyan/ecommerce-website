import { collection, doc, getDoc, getDocs, limit, orderBy, query, DocumentReference } from "firebase/firestore";
import { AppDispatch } from "..";
import { setSavedProductsList, setTotalAmount, userSlice } from "./userSlice";
import { db } from "../../firebase";
import { IUser } from "../types/users";
import { IProduct } from "../../Components/ProductCarouselItem";


const getSavedProducts = (id: string)  => {
  return async (dispatch: AppDispatch) => {
  try {
    const userRef = doc(db, "users", id);
    const userSnapshot = await getDoc(userRef);
    const userData = userSnapshot?.data()?.savedProducts;
    const savedProductsData: IProduct[] = await Promise.all(
      userData.map(async (product: DocumentReference) => {
        const productSnapshot = await getDoc(product);
        return { id: product.id, ...productSnapshot.data() };
      })
    );
    dispatch (setSavedProductsList(savedProductsData)); 
  } catch (err) {
    console.log(err);
  }
}
}

const getSavedProductsTotalAmount = (id: string) => {
  return async (dispatch: AppDispatch) => {

    const userRef = doc(db, "users", id);
    const userSnapshot = await getDoc(userRef);
    const userData = userSnapshot?.data()?.savedProducts;
    const savedProductsData: IProduct[] = await Promise.all(
      userData.map(async (product: DocumentReference) => {
        const productSnapshot = await getDoc(product);
        return { id: product.id, ...productSnapshot.data() };
      })
    );
    try {
      const totalAmount:number = savedProductsData.reduce((accumulator: number, product) => accumulator + +product.price, 0);
      dispatch (setTotalAmount(totalAmount)); 
    } 
    catch (err) {
      console.log(err);
    }
  }
}
;



export const userOp = {
  getSavedProducts, getSavedProductsTotalAmount
};
