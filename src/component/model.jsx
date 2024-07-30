import React,{ useRef, useEffect }  from 'react';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Link } from '@mui/material';
import Box from '@mui/material/Box';
import Video1 from '../assets/v3.mp4';

const BannerGrid = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);
  return (
    <>
    <div className='home'><br/>
      <h1 style={{marginRight:'1800px'}}>Discount For You</h1><br/>
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={6}>
          <Link href="#">
    <img src={require('../assets/b1.png')} alt='asd'></img>
    </Link>
        </Grid>
        <Grid xs={6}>
        <Link href='#'>
        <img src={require('../assets/b2.png')} alt='asd'></img>
    </Link>
        </Grid>
        <Grid xs={6}>
        <Link href='#'>
        <video 
        ref={videoRef} 
        src={Video1}
        controls 
        loop 
        muted 
        style={{ width: '1000px',borderRadius:'10px' }}
      />
    </Link>
        </Grid>
        <Grid xs={6}>
        <Link href='#'>
        <img src={require('../assets/b4.png')} alt='asd'></img>
    </Link>
        </Grid>
      </Grid>
    </Box>
    </div><br/>
    </>
  );
};

export default BannerGrid;
