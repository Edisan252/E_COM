import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import {FaRegUserCircle,FaCartPlus} from "react-icons/fa";
import Login from './login';
import About from './about';
import Home from './home';
import '../design/view.css';


function Header() {
  const Carthandle=()=>{
    alert("Add Card List");
  }
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xxl">
        <Box sx={{height: '100vh' }} >
        <Router >
        <Grid container spacing={1} sx={{bgcolor: '#ecf0f3', padding: '5px',borderRadius:'10px'}}>
        <Grid xs>
        <img src="../assets/logo.svg" alt="" height={100} width={250} />
        </Grid>
        <Grid xs={5}>
        <Search sx={{marginTop:'20px',height:'50px',bgcolor:'white'}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Grid>
        <Grid xs>
          <div className='top1'>
       
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/login"><FaRegUserCircle/> Login</Link></li>
                        <li><button style={{border:'none',backgroundColor:'#ecf0f3'}} onClick={Carthandle}><FaCartPlus/></button></li>
                    </ul>
                    
                    </div>
        </Grid>
      </Grid>
      <Routes>
                        <Route path="/" element={<Home/>}></Route>
                        <Route path="/about"element={<About />}></Route>
                        <Route path="/login"element={<Login />} ></Route>
                    </Routes>
                    </Router>
        </Box>
      </Container>   
    </React.Fragment>
  );
}
export default Header
