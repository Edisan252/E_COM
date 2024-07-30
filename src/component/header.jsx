import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import {FaRegUserCircle,FaCartPlus} from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './login';
import About from './about';
import Home from './home';
import '../design/view.css';
import ShoppingCart from './ShoppingCart';
import Contact from './contact';
import Footer from './footer';


function Header() {
  const notify = () => toast("Add Card List");
  return (
    <React.Fragment>
      <div className='container-fluid top'>
      <CssBaseline /><br/><br/>
      <Container maxWidth="lg">
        <Box sx={{height: 'auto'}} >
        <Router >
        <Grid container spacing={1} sx={{bgcolor:'white',padding: '2px',borderRadius:'5px'}}>
        <Grid xs={3}>
        <img src={require('../assets/logo3.png')} alt="" height={150} width={150} style={{marginRight:'700px'}}/>
        </Grid>
        <Grid xs={9}>
          <div className='top1'>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/ShoppingCart">Product</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/login"><FaRegUserCircle/> Login</Link></li>
                        <li><button style={{border:'none',backgroundColor:'white'}} onClick={notify}><FaCartPlus/></button><ToastContainer /></li>
                    </ul>
                    
                    </div>
        </Grid>
      </Grid>
      <Routes>
                        <Route path="/" element={<Home/>}></Route>
                        <Route path="/ShoppingCart" element={<ShoppingCart/>}></Route>
                        <Route path="/about"element={<About />}></Route>
                        <Route path="/contact"element={<Contact />}></Route>
                        <Route path="/login"element={<Login />} ></Route>
                    </Routes>
                    </Router>
        </Box>
        
      </Container> 
      </div>
      <Footer/>  
    </React.Fragment>
  );
}
export default Header
