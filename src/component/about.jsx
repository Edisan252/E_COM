import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
const About = () =>{
    return(
      <div className="about-container mt-5">
        <img src={require('../assets/founder.jpeg')} alt="" />
      <h1>About Us</h1>
      <p>Welcome to our eCommerce store. We are dedicated to providing the best products and services to our customers.
      At eCommerce store, we are committed to delivering exceptional value through our carefully curated selection of products/services
      . Our mission is to offer an unparalleled shopping experience that combines quality, affordability, 
      and convenience. We aim to exceed your expectations with every purchase, ensuring you receive top-notch products and service.
      </p>
      <h2>Our Story</h2>
      <p>TWhat began as a small initial setup, e.g., "online store" has evolved into a dynamic and thriving eCommerce site, thanks to our dedicated team and loyal customers. We take pride in our journey and are excited about the future as we continue to grow and enhance our offerings.
Thank you for choosing ecommerce. We look forward to serving you and making your shopping experience memorable.o deliver high-quality products at competitive prices while ensuring customer satisfaction.We envision a world where shopping online is not only effortless but also enjoyable. Our goal is to become the go-to destination for product category by continuously innovating and enhancing
        our offerings. We strive to build long-lasting relationships with our customers, grounded in trust and satisfaction.</p>
      <h2>Our Vision</h2>
      <p>To be the leading eCommerce platform known for innovation, customer service, and quality.e envision a world where shopping online is not only effortless but also enjoyable. Our goal is to become the go-to destination for [product category] by continuously innovating and enhancing our offerings. 
        We strive to build long-lasting relationships with our customers, grounded in trust and satisfaction.</p>
        <h2>Our Mission</h2>
        <p>At Your Store Name, we are committed to delivering exceptional value through our carefully curated selection of products/services. 
          Our mission is to offer an unparalleled shopping experience that combines quality, affordability, and convenience. We aim to exceed your expectations with every purchase, ensuring you receive top-notch products and service.</p>
      <h2>Our Values</h2>
      <ul>
        <li>Customer Satisfaction</li>
        <li>Integrity</li>
        <li>Innovation</li>
        <li>Quality</li>
        <li>Teamwork</li>
      </ul>
      </div>
    )
}

export default About
