import { Typography } from '@mui/material';
import React,{useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import Grid from '@mui/material/Unstable_Grid2';
import C1 from '../assets/c1.jpeg';
import C2 from '../assets/c2.jpeg';
 function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("Form submitted successfully!");
      }; 
  return (
    <>
    <div className='contact'>
    <br/>
    <h1>Flipkart Help Center | 24x7 Customer Care Support</h1><br/>
    <Typography variant='p' component='h4' style={{marginLeft:'150px',textAlign:'left'}}>The Flipkart Help Centre page lists out various types of issues that you may have encountered so that there can be quick resolution and you can go back to shopping online. For example, you can get more information regarding order tracking, delivery date changes, help with returns (and refunds), and much more. The Flipkart Help Centre also lists out more information that you may need regarding Flipkart Plus, payment, shopping, and more. The page has various filters listed out on the left-hand side so that you can get your queries solved quickly, efficiently, and without a hassle. You can get the Flipkart Help Centre number or even access Flipkart Help Centre support if you need professional help regarding various topics. The support executive will ensure speedy assistance so that your shopping experience is positive and enjoyable.   
    You can even inform your loved ones of the support page so that they can properly get their grievances addressed as well. Once you have all your queries addressed, you can pull out your shopping list and shop for all your essentials in one place. You can shop during festive sales to get your hands on some unbelievable deals online. This information is updated on 26-Jul-24</Typography><br />
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}sx={{bgcolor:'whitesmoke',maxWidth:'2150px',marginLeft:'50px',borderRadius:'10px',height:'750px'}}>
  <Grid xs={4}>
    <img src={C1} alt="" height={620} width={480}/>
  </Grid>
  <Grid xs={4}>
  <div className="contact-form-container1">
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group1">
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group1">
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group1">
                <label>Message:</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required />
            </div><br/>
            <button type="submit" className="submit-button">Submit</button>
        </form>
        <ToastContainer/>
    </div>
  </Grid>
  <Grid xs={4}>
    <img src={C2} alt="" height={620} width={480}/>
  </Grid>
</Grid>
    </div>
    </>
  )
}
export default Contact