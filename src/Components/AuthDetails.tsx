import {  onAuthStateChanged, signOut} from "firebase/auth";
import {useEffect, useState} from 'react'; 
import {auth} from '../firebase';
import LoginDialogue from './LoginDialogue';
import Logout from './Logout';

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null as any);

    useEffect( () => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user){
                setAuthUser(user);
                return true;
            } else {
                setAuthUser(null as any)
            }
    
        })

        return () => {listen()};
    }, []);
    return (
      <div style = {{marginLeft:'5%'}} >  {authUser ? <> {authUser.email}    <Logout /> </>: <LoginDialogue/>} </div>
    )
};

export default AuthDetails;