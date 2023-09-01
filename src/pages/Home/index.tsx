import "./home.css";
import { CustomButton } from "../../Components/Button/button";
import Typography from "@mui/material/Typography";
import { ToysDescriptionList } from "./ToysDescriptionList";
import { ProductsCarousel } from "../../Components/ProductsCarousel";
import { NewestProduct } from "../../Components/NewestProduct";
import { useNavigate } from 'react-router-dom';
import { Fade, Bounce, Slide } from "react-awesome-reveal";

export const Home = () => {
  const navigate = useNavigate();
    
  const handleButtonClick = () => {
      // Perform any logic before navigation if needed
      navigate("/products"); // Navigate to another route
    };

  return (
    <>
     <section>
      <div className="home-section">
        <Slide cascade triggerOnce={true}>
        <div className="info">
            <Typography variant="h1" sx={{ textTransform: 'uppercase' }}>The best toys store</Typography>
          <div className="description">
            <p>
            We sell toys at a reasonable price and happiness as a discount with it. We are here to serve the demands of your children.
            Here is the chance to grow with love and joy. Marking memories on your baby’s journey towards growing up.
            </p>
          </div>
          <div className="button">
            <CustomButton onClick={handleButtonClick}>See more</CustomButton>
          </div>
        </div>
        </Slide>
        <div className="image">
          <img src="../assets/images/image.png" alt="home image" />
        </div>
      </div>
    </section>
    <section>
      <div className="home-section second-section">
        <div className="image">
          <img src="../assets/images/image2.png" alt="home image" />
        </div>
        <div className="info">
          <ToysDescriptionList />
        </div>
      </div>
    </section>
    <ProductsCarousel />
    <NewestProduct />
    
    </>
   
  );
}
