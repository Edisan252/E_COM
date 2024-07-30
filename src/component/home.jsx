import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import BannerGrid from './model';
import Seller from './seller';

function Home() {
  return (
    <>
    <div className='home'>
    <Carousel style={{marginTop:'10px'}}>
      <Carousel.Item interval={500}>
        <img src={require('../assets/s1.webp')} alt="" height={500} width={2150}/>
      </Carousel.Item>
      <Carousel.Item interval={300}>
      <img src={require('../assets/s2.webp')} alt=""  height={500} width={2150}/>
      </Carousel.Item>
      <Carousel.Item interval={300}>
      <img src={require('../assets/s3.webp')} alt=""  height={500} width={2150}/>
      </Carousel.Item>
    </Carousel>
    </div>
    <Seller/>
    <BannerGrid/>
    </>
  );
}

export default Home;
