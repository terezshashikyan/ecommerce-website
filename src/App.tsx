import { useContext, createContext, useEffect } from 'react';
import {Routes, Route, Link, BrowserRouter} from 'react-router-dom';
import Products from './pages/Products' ; 
import About from './pages/About' ; 
import ContactUs from './pages/ContactUs' ; 
import Layout from './Components/Layout';
import { MuiTheme } from './team';
import { unstable_createMuiStrictModeTheme } from '@mui/material/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import '././app.css'
import './fonts/Poppins/Poppins-Black.ttf';
import { Provider } from 'react-redux';
import { store } from './store';
import { Product } from './pages/Product';
import { Cart } from './pages/Cart';
import { Home } from './pages/Home';
import { NotFoundPage } from './pages/NotFoundPage';
import { ToastContainer,  toast } from 'react-toastify';



const theme = unstable_createMuiStrictModeTheme();

function App() {
  useEffect(() => {
    // 👇 add class to body element
    document.body.classList.add('bg-salmon');
  });

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    
    <ThemeProvider theme={MuiTheme}>
       <ToastContainer/>
    <Provider store={store}>
    <Routes>
    <Route path = "/" element = {<Layout/>} > 
      <Route index element = {<Home/>} /> 
      <Route path = "/products" element = {<Products/>} /> 
      <Route path="products/:id" element={<Product />} />
      <Route path = "/about" element = {<About/>} /> 
      <Route path = "/contactUs" element = {<ContactUs/>} /> 
      <Route path = "/shoppingcart" element = {<Cart/>} /> 
      <Route path = "*" element = {<NotFoundPage/>} /> 
    </Route>
    </Routes>
    </Provider>
    </ThemeProvider>
  

  );
}

export default App;
