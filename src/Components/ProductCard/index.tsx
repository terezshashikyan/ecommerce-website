import React from 'react'
import { IProduct, ProductCarouselItem } from '../ProductCarouselItem';
import { useNavigate } from 'react-router-dom';

interface IPropCard {
    product: IProduct;
  }

export const ProductCard = (props: IPropCard) => {
    const { name, img, id, category, description, price } = props.product;
    const navigate = useNavigate();

  return (
      <ProductCarouselItem
          id={id}
          name={name}
          price={price}
          key={id}
          img={img}
          description={description}
          category={category}
          />
        
    
  )
}
