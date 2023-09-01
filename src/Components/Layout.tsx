import {Link, Outlet} from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Container } from '@mui/material';
import "../app.css"


function Layout() {
    return(
 <>
 <Container maxWidth="lg">
     <Header />
    <Outlet/>
    <Footer/>
 </Container>

 </>
 );
}


export default Layout;