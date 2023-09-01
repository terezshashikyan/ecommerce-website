import React, { useState } from 'react';
import styled from 'styled-components';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useSelector } from 'react-redux';
import { productsSel } from '../../store/products';


export const HeartIcon  = () => {
    const products = useSelector(productsSel.productsListSelector);
    const [isHovered, setIsHovered] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
  
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  
    const handleHeartClick = () => {
      setIsFilled(!isFilled);
      
    };
  
    return (
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleHeartClick}
      >
        {isHovered || isFilled ? (
          <FavoriteIcon color={isFilled ? 'error' : 'inherit'} />
        ) : (
          <FavoriteBorderIcon />
        )}
      </div>
    );
}
