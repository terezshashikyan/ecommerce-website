import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {auth} from '../firebase';
import {useState} from 'react';
import PayPalButton from './PayPalButton';
import { IconButton } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { userOp, userSel } from "../store/user";
import {useSelector, useDispatch} from "react-redux";
import { IProduct } from '../pages/Product';

export default function BuyNowDialogue() {
  const [open, setOpen] = React.useState(false);
    //  const dispatch = useDispatch<AppDispatch>();
    const savedProducts = useSelector(userSel.savedProductsListSelector);
    const totalAmount = useSelector(userSel.totalAmountSelector);

  

  const handleClickOpen = () => {
    setOpen(true);

  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSuccess = () => {
    alert('hi')
  };

  return (
    <div>
      <IconButton onClick={handleClickOpen} color='secondary'>
      <ShoppingCartOutlinedIcon fontSize='large'/> Buy All
      </IconButton>
      <section style = {{width: '500px'}}>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Purchase Confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Total amount for your purchase is ${totalAmount?.toFixed(2)}. Choose the payment method to continue.
          </DialogContentText>
          
        </DialogContent>
        <PayPalButton amount = {totalAmount} onSuccess={onSuccess} />
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
        
      </Dialog>
      </section>
    </div>
  );
}