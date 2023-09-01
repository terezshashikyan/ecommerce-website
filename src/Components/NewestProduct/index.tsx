import React from 'react'
import { ProductsCarousel } from '../ProductsCarousel'
import Typography from '@mui/material/Typography'
import { CustomButton } from '../Button/button'
import { useSelector } from 'react-redux'
import { productsSel } from '../../store/products'

export const NewestProduct = () => {
  const products = useSelector(productsSel.productsListSelector);

  const lastItem = products.length > 0 ? products[products.length - 1] : null;
  // console.log("last item" , lastItem);
  
  return (
    <>
    <section>
      <Typography variant="h1" align='center'>NEW!!!!!</Typography>
      {lastItem ? (
      <div className="home-section newest-product">
        <div className="image">
          <img src={lastItem.img} alt={lastItem.img} />
        </div>
        <div className="new-toy-info">
        <Typography variant="h1">{lastItem.name}</Typography>
        
        <Typography variant="subtitle1">{lastItem.description}</Typography>
        <Typography variant="h6">{lastItem.price}</Typography>
        </div>
      </div>
      ): (
        <Typography variant="h1" align='center'>No Items Availabe!!!</Typography>
      )}
    </section>
      
    </>
  )
}
