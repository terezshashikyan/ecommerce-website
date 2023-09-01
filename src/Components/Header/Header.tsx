import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import AuthDetails from '../AuthDetails';
import Container from '@mui/material/Container';
import { userOp, userSel } from "../../store/user";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useDispatch, useSelector } from 'react-redux';
import {useEffect, useState} from 'react';
import { db, auth } from "../../firebase";
import { AppDispatch } from '../../store';



interface Props {
 
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [ 'About', "Products", 'ContactUs'];

export default function Header (props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
     <img className='logo' src="../../assets/images/logo.png" alt="" />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Link to = {`/${item}`}>{item}</Link>
            </ListItemButton>
          </ListItem>
          
        ))}
        <AuthDetails />
      </List>
    </Box>
  );

  const savedProducts = useSelector(userSel.savedProductsListSelector);
  const dispatch = useDispatch<AppDispatch>();
  

    useEffect(() => {
        dispatch(userOp.getSavedProducts(auth?.currentUser?.uid || ''));
      }, []);


  return (
    
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
      <Container maxWidth="lg">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' }, width: "100%" }}
          >
            <Link to = {'/'} style={{ color: '#fff', textDecoration: 'none' }}>
              <img className='logo' src="../../assets/images/logo.png" alt="" />
              </Link> 
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
               <Link to = {`/${item}`} style={{ color: '#fff', textDecoration: 'none' }}>{item}</Link> 
               
              </Button>
            )) }
            <Link to={"/shoppingcart"}>
              <div className="wishlist">
                <ShoppingCartOutlinedIcon style={{fill: "white"}} />
                <span className="count">{savedProducts.length}</span>
              </div>
              </Link>
            
          </Box>
          <AuthDetails/>
        </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
     
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
    
  );
}