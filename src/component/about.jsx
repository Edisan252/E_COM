import React, { useRef, useEffect } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Video from '../assets/v1.mp4';
import A1 from '../assets/a1.jpg';
import A2 from '../assets/a2.jpg';
import A4 from '../assets/a4.png';
import A5 from '../assets/a5.png';
import A6 from '../assets/a7.jpg';

const About = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <>
    <div className='container about mt-3 home'> 
      <video 
        ref={videoRef} 
        src={Video}
        controls 
        loop 
        muted 
        style={{ width: '100%' }}
      />
    </div>
    <div className='home about1'>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid xs={6}>
    <img src={A1} alt="" />
  </Grid>
  <Grid xs={6}>
  <Typography variant="h2" component='h1' style={{marginTop:'200px',color:'#ffcd00'}}>The Flipkart Group</Typography>
  <Typography variant='h4' component='h2' style={{marginTop:'50px',textAlign:'justify'}}>The Flipkart Group is one of India's leading digital commerce entities and includes group companies Flipkart, Myntra, Flipkart Wholesale, Flipkart Health+, Cleartrip and ANS Commerce.</Typography>
  <Typography variant='h4' component='button' style={{marginTop:'200px',marginRight:'500px', border:' 3px solid white',
    backgroundColor:'rgb(65, 127, 235)',padding:'10px',color:'white',width:'300px',borderRadius:'10px'}}>About Us</Typography>
  </Grid>
</Grid>
    </div>
    <div className='ethics home'>
      <h1 style={{fontWeight:'600'}}>Ethics & Compliance</h1><br/>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid xs={12}>
  <img src={A2} alt='' height={400} width={500} />
  </Grid>
</Grid>
<Typography variant='h4' component='p' style={{textAlign:'center'}}>The future of e-commerce is sustainable, equitable and inclusive. As we continue to drive changes across key areas of our operations, our commitment is embedded in our vision to create a positive impact, for the planet and communities.</Typography>
<Typography variant='h4' component='button' style={{marginTop:'100px',marginRight:'100px', border:' 3px solid white',
    backgroundColor:'rgb(65, 127, 235)',padding:'20px',color:'white',width:'300px',borderRadius:'10px'}}>Know More</Typography>
    </div>
    <div className='culture home'>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    <Grid xs={6}>
    <Typography variant='h3' component='h2'  style={{marginRight:'20px',color:'#ffcd00'}}><br/>Flipkart Culture</Typography>
      <Typography variant='h5' component='p' style={{marginRight:'50px',color:'white',textAlign:'left',marginLeft:'100px',marginTop:'30px'}}>Flipkart culture is steeped in fostering trust, inclusion, support, recognition and genuine care that enables Flipsters to create, innovate, and bring their best selves to work</Typography>
<Typography variant='h5' component='button' style={{marginTop:'30px',
    backgroundColor:'rgb(65, 127, 235)',padding:'20px',color:'white',width:'200px',borderRadius:'10px'}}>Know More</Typography>
       
  </Grid>
  <Grid xs={6}>
    <img src={A4} alt='' height={250} width={300} style={{marginTop:'335px',marginLeft:'265px'}}/>
  </Grid>
      </Grid>
    </div>
    <div className='home'>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid xs={6}><br />
    <img src={A5} alt="" height={500}/>
  </Grid>
  <Grid xs={6}>
  <Typography variant='h4' component='h2'  style={{marginRight:'100px',textAlign:'left'}}><br/><br/>TECHNOLOGY AT FLIPKART<br/><b>INNOVATION</b></Typography>
  <Typography variant='h5' component='p' style={{marginRight:'100px',textAlign:'left',marginTop:'30px'}}>
  Flipkart technology drives path-breaking, customer-focused innovation that makes high quality products accessible to Indian shoppers, besides making the online shopping experience convenient, intuitive and seamless.</Typography>
  <Typography variant='h5' component='button' style={{marginTop:'50px',marginRight:'700px',border:'none', 
    backgroundColor:'rgb(65, 127, 235)',padding:'20px',color:'white',width:'200px',borderRadius:'10px'}}>Read More</Typography>
  </Grid>
</Grid>
    </div>
     <div className='ethics home'>
      <h1 style={{fontSize:'40px',fontWeight:'600'}}>Sustainability</h1><br/>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid xs={12}>
  <img src={A6} alt='' height={500} width={1000} />
  </Grid>
</Grid><br />
<Typography variant='h3' component='p' style={{textAlign:'center'}}>Building trust with Integrity. At Flipkart, every decision made is based on ethical and <br/>
moral principles - no success is meaningful if it’s not achieved the right way.</Typography>
<Typography variant='h4' component='button' style={{marginTop:'50px',marginRight:'100px', border:' 3px solid white',
    backgroundColor:'rgb(65, 127, 235)',padding:'20px',color:'white',width:'300px',borderRadius:'10px'}}>Know More</Typography>
    </div><br/><br/>
    </>
  );
};

export default About;
