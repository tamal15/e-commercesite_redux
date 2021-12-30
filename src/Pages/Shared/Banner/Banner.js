import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from '../../../images/bike-11.png'
import slider2 from '../../../images/bike-12.png'
import slider3 from '../../../images/bike-13.png'
import './Banner.css'
import { Link } from 'react-router-dom';


const Banner = () => {
    return (
        <div>

<Carousel className="banners">
  <Carousel.Item className="carousel-design">
  <img
      className="d-block w-100 slide"
      src={slider1}
      alt="First slide"
    />
  
  
    <Carousel.Caption className="styles">
      
    <Link to='/moreproducts'>
    <button className="banner  text-white">More Products</button>
    </Link>
     
    </Carousel.Caption>
  

   
  </Carousel.Item>
  
  <Carousel.Item>
    <img
      className="d-block w-100 slide"
      src={slider2}
      alt="Second slide"
    />

    <Carousel.Caption>
 
    <Link to='/moreproducts'>
    <button className="banner  text-white">More Products</button>
    </Link>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block  slide"
      src={slider3}
      alt="Third slide"
    />

    <Carousel.Caption>
  
    <Link to='/moreproducts'>
    <button className="banner  text-white">More Products</button>
    </Link>
    
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            
        </div>
    );
};

export default Banner;