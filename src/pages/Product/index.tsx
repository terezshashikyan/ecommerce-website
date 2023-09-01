import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { AppDispatch } from "../../store";
import { productsOp, productsSel } from "../../store/products";
import "./style.css";
import { NotFoundPage } from "../NotFoundPage";
import Typography from "@mui/material/Typography";
import { ProductCarouselItem } from "../../Components/ProductCarouselItem";
import { ProductsCarousel } from "../../Components/ProductsCarousel";

export interface IProduct {
  id: string;
  name: string;
  img: string;
  price: string;
  category: string;
  description: string;
}

export const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const product = useSelector(productsSel.productSelector);

  useEffect(() => {
    if (id) {
      dispatch(productsOp.getProductById(id));
    }
  }, [dispatch, id]);

  return (
    <>
      {product ? (
        <section>
          <div className="single-product">
            <div className="image">
              <img src={product.img} alt={product.img} />
            </div>
            <div className="info">
            <Typography variant="h2">{product.name}</Typography>
            <Typography variant="h2" className="product-price">{product.price}</Typography>
            <Typography variant="subtitle1">Category: {product.category}</Typography>
            <Typography variant="subtitle1">Description: {product.description}</Typography>
            </div>
          </div>
        </section>
      ) : (
        <NotFoundPage />
      )}

      <ProductsCarousel />
    </>
  );
};
