import {auth} from '../firebase';
import {signOut} from "firebase/auth";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function Logout() {
return ( 
    <>
              <Button     variant ="contained"  
            style={{
            borderRadius: 35,
            border: "1px solid #ffffff",
            backgroundColor: "transparent",        
            }}
            onClick={() => {signOut(auth)}}
            >
        Log Out
</Button>
    </>

)};

export default Logout;