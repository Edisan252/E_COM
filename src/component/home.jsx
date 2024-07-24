import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (
    <>
    <Carousel>
      <Carousel.Item interval={500}>
        <img src='../medical.png' height={800} width={1900}/>
      </Carousel.Item>
      <Carousel.Item interval={300}>
      <img src='../medical.png' height={800} width={1900}/>
      </Carousel.Item>
      <Carousel.Item interval={300}>
      <img src='../medical.png' height={800} width={1900}/>
      </Carousel.Item>
    </Carousel>
    </>
  );
}

export default Home;