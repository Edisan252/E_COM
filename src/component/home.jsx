import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (
    <>
    <Carousel style={{marginTop:'20px'}}>
      <Carousel.Item interval={500}>
        <img src={require('../assets/s1.webp')} alt="" height={500} width={1800}/>
      </Carousel.Item>
      <Carousel.Item interval={300}>
      <img src={require('../assets/s2.webp')} alt=""  height={500} width={1800}/>
      </Carousel.Item>
      <Carousel.Item interval={300}>
      <img src={require('../assets/s3.webp')} alt=""  height={500} width={1800}/>
      </Carousel.Item>
    </Carousel>
    </>
  );
}

export default Home;
