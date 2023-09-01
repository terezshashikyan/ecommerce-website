import { collection, doc, getDoc, getDocs, limit, orderBy, query } from "firebase/firestore";
import { AppDispatch } from "..";
import { productsSlice } from "./productsSlice";
import { db } from "../../firebase";
import { IProduct } from "../../Components/ProductCarouselItem";


const docRef = doc(db, "products", "product1");
// const validRef = firestore.collection('products').doc('product1');

const getProducts = () => {
  
  const newProductsList: IProduct[] = [];

  return async (dispatch: AppDispatch) => {
    const { setProducts } = productsSlice.actions;
    const itemsPerPage = 10;

    try {
      
      const querySnapshot = await getDocs(collection(db, "products"));
      
      querySnapshot.forEach((doc) => {
        const product: IProduct = {
          id: doc.data().id,
          name: doc.data().name,
          img: doc.data().img,
          price: doc.data().price,
          category: doc.data().category,
          description: doc.data().description,
        };

        newProductsList.push(product);
      });

      dispatch(setProducts(newProductsList));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
};

const getProductById = (id: string) => {
  return async (dispatch: AppDispatch) => {
    const { setProduct } = productsSlice.actions;

    try {
      const querySnapshot = await getDoc(doc(db, "products", id));
      const product = querySnapshot.data() as IProduct;

      dispatch(setProduct(product));
    } catch (error: any) {
      console.log(error);
    }
  };
};

export const productsOp = {
  getProducts,
  getProductById,
};
