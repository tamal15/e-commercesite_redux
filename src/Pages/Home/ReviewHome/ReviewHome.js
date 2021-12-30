import React, { useEffect, useState } from 'react';
import './ReviewHome.css'

const ReviewHome = () => {

    const [comment,setComment]=useState([])
    useEffect(()=>{
        fetch('https://shielded-beach-03067.herokuapp.com/review')
        .then(res=>res.json())
         .then(data=>{
             setComment(data)
             console.log(data)
         })
     
           
    },[])
    const designShow = {
        width: '18rem'
    }
    return (
        <div>
            <h2 className="text-info">Review</h2>
            <div className="container ">
              <div className="row">
                 
              {
                        comment?.map((comments)=>(
                            <div className="col-lg-4 mb-5 mt-5 col-sm-12 image-card ">
           
                            <div className="card review" style={designShow}>
                                <h3>Rating : {comments.number}</h3>
                              <h3>{comments.name}</h3>
                                <div class="card-body body-designs">
                                    <h4>{comments.email}</h4>
                                    <h6 class="card-text">{comments.comments}.</h6>
                                  
                                   
                                  
                                 
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

export default ReviewHome;