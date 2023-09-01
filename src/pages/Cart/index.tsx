
import { ProductCard } from "../../Components/ProductCard";
import LoginDialogue from "../../Components/LoginDialogue";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch} from "../../store";
import { auth } from "../../firebase";
import { Typography } from "@mui/material";
import { userOp, userSel } from "../../store/user";
import {  onAuthStateChanged} from "firebase/auth";
import {useEffect, useState} from 'react'; 
import notFound from './notFound.jpg';
import BuyNowDialogue from "../../Components/BuyNowDialogue";






export function Cart () {
    const [authUser, setAuthUser] = useState(null as any);
    const dispatch = useDispatch<AppDispatch>();
    const savedProducts = useSelector(userSel.savedProductsListSelector);

    const handlePaymentSuccess = () => {
        alert ('Payment was done successful.');
      };
  
   
   //checking if the user is signed in or not
    useEffect(() => {
       if(auth.currentUser) { dispatch(userOp.getSavedProducts(auth.currentUser.uid))};
      }, [savedProducts, auth]);


      useEffect( () => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user){
                setAuthUser(user);
                return true;
            } else {
                setAuthUser(null as any)
            }
    
        })
        return () => {listen()};
    }, []);


    return (
        authUser ? 
        <section className="products-section">
            <div style = {{margin: '2%'}}>
            <BuyNowDialogue/>
            </div>
            <div className="products-list">
            {savedProducts.map((product) => (
                <ProductCard product={product} key={product.id}  />
            ))}
            </div>
        </section>  : <section className='not-found-section'>
            <div className="text">
                <Typography variant="h2">Please Login to Track Your Saved Products and Make Purchases.</Typography>
                <LoginDialogue/>
            </div>
            <div className="image">
                <img src={notFound} alt="Not Found" />
            </div>
            
        </section>
    )
};


