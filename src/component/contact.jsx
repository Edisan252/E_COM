import { Link, Typography } from '@mui/material';
import React,{useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import Carousel from 'react-bootstrap/Carousel';
import Grid from '@mui/material/Unstable_Grid2';
import { FaInstagram,FaWhatsapp,FaGithub ,FaLinkedin,FaEnvelope} from "react-icons/fa";
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
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
    <div className='contact'><br />
    <h1>Contact us</h1>
    <div className='contact1'>
    <h1>Flipkart Help Center | 24x7 Customer Care Support</h1><br/>
    <Typography variant='p' component='h4' style={{marginLeft:'1px',textAlign:'left'}}>The Flipkart Help Centre page lists out various types of issues that you may have encountered so that there can be quick resolution and you can go back to shopping online. For example, you can get more information regarding order tracking, delivery date changes, help with returns (and refunds), and much more. The Flipkart Help Centre also lists out more information that you may need regarding Flipkart Plus, payment, shopping, and more. The page has various filters listed out on the left-hand side so that you can get your queries solved quickly, efficiently, and without a hassle. You can get the Flipkart Help Centre number or even access Flipkart Help Centre support if you need professional help regarding various topics. The support executive will ensure speedy assistance so that your shopping experience is positive and enjoyable.   
    You can even inform your loved ones of the support page so that they can properly get their grievances addressed as well. Once you have all your queries addressed, you can pull out your shopping list and shop for all your essentials in one place. You can shop during festive sales to get your hands on some unbelievable deals online. This information is updated on 26-Jul-24</Typography><br />
    </div><br/>
    <div className='home1'>
    <Carousel>
      <Carousel.Item interval={500}>
        <img src={require('../assets/c1.jpeg')} alt="" height={400} width={1000}/>
      </Carousel.Item>
      <Carousel.Item interval={300}>
      <img src={require('../assets/c2.jpeg')} alt=""  height={400} width={1000}/>
      </Carousel.Item>
      <Carousel.Item interval={300}>
      <img src={require('../assets/s3.webp')} alt=""  height={400} width={1000}/>
      </Carousel.Item>
    </Carousel>
    </div>
    <div className='home'>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}sx={{bgcolor:'white',marginLeft:'5px',borderRadius:'10px'}}>
  <Grid xs={3} sx={{marginTop:'100px'}}>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.57266017857!2d78.79955069034628!3d10.385313661083183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00782d25029679%3A0x4503e2d3b4a3897f!2z4K6q4K-B4K6k4K-B4K6V4K-N4K6V4K-L4K6f4K-N4K6f4K-ILCDgrqTgrq7grr_grrTgr40g4K6o4K6-4K6f4K-BIDYyMjAwMw!5e1!3m2!1sta!2sin!4v1722003029697!5m2!1sta!2sin" width="350" height="400" style={{border:'0',boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',borderRadius: '10px'}} 
  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='map'></iframe>
  </Grid>
  <Grid xs={4}>
  <div className="contact-form-container1">
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
            </div>
            <button type="submit" className="submit-button">Submit</button>
        </form>
        <ToastContainer/>
    </div>
  </Grid>
  <Grid xs={5}>
  <div className="contact3">
    <ul>
    <li><Link href="#"><FaEnvelope /> Email Id:aroedisanawack@gmail.com</Link></li>
    <li><Link href="#"><LocationOnIcon /> Location:6/250/5,mamarathupatti,
    Lembalakkudi(PO),Thirumayam(TK),
    Pudukkottai(DT).622412</Link></li>
    <li><Link href="#"><CallIcon /> Contact:+91 8838431399</Link></li>
    </ul>
    </div>
    <div className='contact2'>
    <ul>
    <li><Link href="https://www.instagram.com/king_of_pdkt_55?utm_source=qr&igsh=MW16amh0dTJ5YWQzag== "><FaInstagram /></Link></li>
    <li><Link href=" https://wa.me/qr/2RQKORRT2GQXB1"><FaWhatsapp/></Link></li>
    <li><Link href="https://github.com/Edisan252 "><FaGithub /></Link></li>
    <li><Link href="https://www.linkedin.com/in/aroedisan- alwa-ck-263626279"><FaLinkedin /></Link></li>
    </ul>
  </div>
  </Grid>
</Grid>
</div><br />
    </div>
    </>
  )
}
export default Contact