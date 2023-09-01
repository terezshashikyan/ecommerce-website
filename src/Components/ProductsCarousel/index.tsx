import React, { useEffect} from 'react'
import { ProductCarouselItem } from '../ProductCarouselItem';
import { CustomButton } from '../Button/button';
import { useDispatch, useSelector } from 'react-redux';
import { productsOp, productsSel } from '../../store/products';
import { AppDispatch } from '../../store';
import Slider from "react-slick";
import "././productsCarousel.css"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { selectFourProducts } from '../../store/products/selectors';

export const ProductsCarousel = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector(productsSel.productsListSelector);
  const selectedproducts = useSelector(selectFourProducts);
  const navigate = useNavigate();
    
    useEffect(() => {
        dispatch(productsOp.getProducts());
      }, [dispatch]);
    
    const handleButtonClick = () => {
        navigate("/products");
      };
  
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1200,
    pauseOnFocus: true, 
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  };
  return (
    <section>
      <Typography variant="h1" align='center'>Best Sellers</Typography>
      <Slider {...settings}>
      {selectedproducts.map((product) => {
          return (
            <>
            <ProductCarouselItem
                id={product.id}
                name={product.name}
                price={product.price}
                img={product.img}
                description={product.description}
                category={product.category}
                key={product.id}
            />
            </>
          );
        })}
      </Slider>
      <div className="carousel-seeMore-btn">
         <CustomButton onClick={handleButtonClick}>See more</CustomButton>
      </div>
    </section>
  );
}
