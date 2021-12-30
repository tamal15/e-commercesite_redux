import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Shared/Navigation/Navigation';

const MoreProducts = () => {
    const [product,setProduct]=useState([])

    useEffect(()=>{
        fetch('https://shielded-beach-03067.herokuapp.com/bike')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
    const designShow = {
        width: '18rem'
    }

    return (
        <div>
            <Navigation></Navigation>
          <div className="container">
              <div className="row">

              {
                        product.map((offers,index)=>(
                            <div className="col-lg-4 mb-5 mt-5 col-sm-12 image-card ">
           
                            <div className="card" style={designShow}>
                                <img className="image-design" src={offers.img} class="card-img-top" alt="..." />
                                <div class="card-body body-designs">
                                    <h3>{offers.name}</h3>
                                    <h3>{offers.price}</h3>
                                    <p class="card-text">{offers.description}.</p>
                                  
                                    <Link to={`/serviceDetails/${offers._id}`}> <button className="button">Buy Now</button></Link>
                                  
                                 
                                </div>
                    
                    
                            </div>
                        </div>
                        ))
                    }
              </div>
          </div>
        </div>
    );
};

export default MoreProducts;