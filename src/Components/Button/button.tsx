import React from 'react'
import './button.css'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

interface IButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export const CustomButton = (props: IButtonProps) => {
  const { children, onClick } = props; 
  return (
    <Button className='customButton' onClick={onClick}>
      {children}
    </Button>

  )
}