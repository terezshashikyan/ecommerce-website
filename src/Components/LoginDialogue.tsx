import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {auth} from '../firebase';
import {useState} from 'react';
import { signInWithEmailAndPassword, 
  onAuthStateChanged, 
  signOut} from "firebase/auth";
import RegistrationDialogue from './RegistrationDialogue';
import { CustomButton } from './Button/button';

export default function LoginDialogue() {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogin = () => {
    // event.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then(() => { setOpen(false)}).catch((error) => {alert("Wrong Password or Email!")})
  };

  return (
    <div>
      <div className="button" style = {{width: '140px'}}>
      <CustomButton onClick={handleClickOpen} >
        Login
      </CustomButton>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To sign in, please enter your email address and password here.
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
        <RegistrationDialogue/>
        <DialogActions>
          <Button onClick= {handleLogin} >Login </Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
        
      </Dialog>
    </div>
  );
}