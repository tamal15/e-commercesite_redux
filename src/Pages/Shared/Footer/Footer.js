import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div>
        <div className="footer-container">
            <div className="row">
                <div className="col-lg-5">
                    <div className="left-container text-start">
                        <h1>Bike Store</h1>
                        <div className="icons-container d-flex text-center">
                            <div className="icons">
                            <i class="fab fa-facebook-square"></i>
                            </div>
                            <div className="icons">
                            <i class="fab fa-youtube"></i>
                            </div>
                            <div className="icons">
                            <i class="fab fa-twitter-square"></i>
                            </div>
                            <div className="icons">
                            <i class="fab fa-instagram-square"></i>
                            </div>
                         
                        </div>
                        <p>Street bikes include cruisers, sportbikes, scooters and mopeds, and many other types. Off-road motorcycles include many types designed for dirt-oriented racing classes such as motocross and are not street legal in most areas.</p>
                            <p>
                                <small>
                                    tamal @ copyright the design
                                </small>
                            </p>
                    </div>
                  
                </div>

                <div className="col-lg-2">
            <div className="menu-container">
            <ul>
          <Link to="/home" className="footer-menubar">
           <li>Home</li>
           </Link>
          <Link to="/home" className="footer-menubar">
          <li>About</li>
           </Link>
           <Link to="/home" className="footer-menubar">
           <li>Services</li>
            </Link>
            <Link to="/home" className="footer-menubar">
             <li>Courses</li>
            </Link>
           </ul>
       </div>

       </div>
       <div className="col-lg-5">
       <div className="right-footer-container">
           <h3>Sign up for the newsletter</h3>
           <input className="input" type="text" placeholder="enter email" />
           <br/>
           <br/>
           <div className="phone-icon">

        <h6>
        <span><i class="fas fa-phone-square"></i></span><span className="phone">0947436221</span>
        </h6>
         <h6> <span> <i className="fas fa-envelope"></i></span><span className="phone">info@marufultamal.com</span></h6>

         <h6> <span>  <i class="fas fa-home"></i></span><span className="phone">Address Dhanmondi Dhaka</span></h6>
           </div>
       </div>
       </div>
       

            </div>
        </div>
    </div>
    );
};

export default Footer;