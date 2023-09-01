import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import notFound from './notFound.jpg';
import "./notFound.css";
import { CustomButton } from '../../Components/Button/button';
import React from 'react'
import { useNavigate } from 'react-router-dom';


export const NotFoundPage = () => {
    const navigate = useNavigate();
    
    const handleButtonClick = () => {
        // Perform any logic before navigation if needed
        navigate("/"); // Navigate to another route
      };

    return (
        <section className='not-found-section'>
            <div className="text">
                <Typography variant="h1">404</Typography>
                <Typography variant="h2">Sorry, the page you are looking for could not be found.</Typography>
                <CustomButton onClick={handleButtonClick}>Are you lost?</CustomButton>
            </div>
            <div className="image">
                <img src={notFound} alt="Not Found" />
            </div>
            
        </section>
    )
}
