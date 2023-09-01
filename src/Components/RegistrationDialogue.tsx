import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {auth} from '../firebase';
import {useState} from 'react';
import { createUserWithEmailAndPassword, 
  onAuthStateChanged, 
  signOut} from "firebase/auth";
import { db } from "../firebase";
import {doc,collection, updateDoc, setDoc, addDoc } from "@firebase/firestore";


export default function RegistrationDialogue() {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUserRegistration = () => {
    // event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password).then((userCredentials) => { setOpen(false); setDoc (doc(db, 'users',userCredentials.user.uid ),  {email: email, savedProducts: [], totalAmount: 1});}).catch((error) => {alert("Wrong Password or Email!")})
  };

  return (
    <div>
      <Typography  style = {{textAlign: 'right', margin: '2%', cursor: 'pointer'}}onClick={handleClickOpen}>
        Haven't registered yet? Click to create a new account!
      </Typography>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Sign Up</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To create account, please enter your email address and password here.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            value = {email}
            onChange={(e) => {setEmail(e.target.value)}} 
          />
          
           <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
            value = {password}
            onChange={(e) => {setPassword(e.target.value)}} 
          />
        </DialogContent>
        <DialogActions>
          <Button onClick= {handleUserRegistration} >Sign Up </Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}