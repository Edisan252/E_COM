import React from 'react';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Link } from '@mui/material';
import Box from '@mui/material/Box';

const BannerGrid = () => {
  return (
    <>
    <div className='home'><br/>
      <h1 style={{marginRight:'750px'}}>Discount For You</h1><br/>
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={6}>
          <Link href="#">
    <img src={require('../assets/b1.png')} alt='asd' width={520} height={200}></img>
    </Link>
        </Grid>
        <Grid xs={6}>
        <Link href='#'>
        <img src={require('../assets/b2.png')} alt='asd' width={520} height={200}></img>
    </Link>
        </Grid>
        <Grid xs={6}>
        <Link href='#'>
        <img src={require('../assets/b2.png')} alt='asd' width={520} height={200}></img>
    </Link>
        </Grid>
        <Grid xs={6}>
        <Link href='#'>
        <img src={require('../assets/b4.png')} alt='asd' width={520} height={200}></img>
    </Link>
        </Grid>
      </Grid>
    </Box>
    </div><br/>
    </>
  );
};

export default BannerGrid;
