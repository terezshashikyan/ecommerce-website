import Typography from '@mui/material/Typography';
import "./style.css";
import { CustomButton } from '../Button/button';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { productsOp, productsSel } from '../../store/products';
import { AppDispatch } from '../../store';
import { userOp, userSel } from "../../store/user";
import { IconButton } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { db, auth } from "../../firebase";
import { arrayRemove, arrayUnion, doc, updateDoc, getDoc } from "@firebase/firestore";
import {toast } from 'react-toastify';


export interface IProduct {
    id: string;
    name: string;
    img: string;
    price: string;
    category: string;
    description: string;
}


export const ProductCarouselItem = (props: IProduct ) => {
    const {id,img, name, price} = props;
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const savedProducts = useSelector(userSel.savedProductsListSelector);

    const totalAmount = useSelector(userSel.totalAmountSelector);
    const getTotalAmount = userOp.getSavedProductsTotalAmount(auth?.currentUser?.uid || '');
  

    useEffect(() => {
        dispatch(userOp.getSavedProducts(auth?.currentUser?.uid || ''));
        
      }, [dispatch]);
    

  useEffect(() => {
    if (id) {
      dispatch(productsOp.getProductById(id));
    }
  }, [dispatch]);


    const handleWishlistClick = async (productId: string, userId: string) => {
        
        try {
          const userRef = doc(db, "users", userId);
          const userSnap = await getDoc(userRef);
          const productRef = doc(db, "products", productId);
          const productSnap = await getDoc(productRef);
          await updateDoc(userRef, { 
            savedProducts: savedProducts.filter((product) => product.id === productId).length ? arrayRemove(productRef) : arrayUnion(productRef)
          });
          dispatch (userOp.getSavedProductsTotalAmount(auth?.currentUser?.uid || ''));
          
        } catch (err) {
            console.log(err);
            alert ('Are you loged in ? Log in to make purchases. ')
            
          }
        };
    

    const handleButtonClick = () => {
      const navigated = navigate(`${id}`);
      console.log(navigated);
      
    };

  return (
    <>
    <div className="product-item" onClick={() => navigate(`/Products/${id}`)}>
      <div className="item-image">
          <img src={img} alt={img} />
          </div>
          <div className="item-name">
            <Typography variant="h2">{name}</Typography>
          </div>
          <div className="item-price">
            <Typography variant='subtitle1'>$US {price}</Typography>
          </div>
          <CustomButton onClick={handleButtonClick}>See more</CustomButton>
          <div className="onhover-effect">
            <IconButton  onClick={(e) => {e.stopPropagation();  handleWishlistClick(id, auth?.currentUser?.uid? auth?.currentUser.uid: '') }}>
            <ShoppingCartOutlinedIcon color = {savedProducts.filter((product) => product.id === id).length ? 'success':'secondary'}  /> 
            </IconButton>
           
          </div>
          
    </div>
          
    </>
  
  )
}
