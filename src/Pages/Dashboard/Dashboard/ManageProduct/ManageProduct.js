import React, { useEffect, useState } from 'react';

const ManageProduct = () => {
    const [product,setProduct]=useState([])
    const[control,setControl]=useState(false)
    

    useEffect(()=>{
        fetch('https://shielded-beach-03067.herokuapp.com/bike')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])

    const handleDelete=(id)=>{
        const proceed=window.confirm('are you sure, you want to delete');
        if(proceed){
            fetch(`https://shielded-beach-03067.herokuapp.com/deleteManage/${id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount>0){
                    alert('delete');
                    const remaining=product.filter(product=>product._id !==id)
                    setProduct(remaining)
                }
            })

        }

    }

      // fetch(`https://shielded-beach-03067.herokuapp.com/deleteManage/${id}`,{
        //     method:'DELETE'
        // }).then(res=>res.json())
        // .then(data=>{
        //     if(data.deletedCount){
        //         setControl(!control)
        //     }
        // });
        // console.log(id)
    const designShow = {
        width: '18rem'
    }
    return (
        <div>
            <div className="container">
                <div className="row">

                {
                        product.map((offers)=>(
                            <div className="col-lg-6 mb-5 mt-5 col-sm-12 image-card ">
           
                            <div className="card" style={designShow}>
                                <img className="image-design" src={offers.img} class="card-img-top" alt="..." />
                                <div class="card-body body-designs">
                                    <h3>{offers.name}</h3>
                                    <h3>{offers.price}</h3>
                                    <p class="card-text">{offers.description}.</p>
                                  
                                    <button className="button" onClick={()=>handleDelete(offers?._id)}>Delete</button>
                                 
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

export default ManageProduct;