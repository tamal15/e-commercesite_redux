import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';

const MyOrder = () => {
    const [service,setService]=useState([])
    const{user}=useAuth()
    const[control,setControl]=useState(false)
// const email=user?.email

    useEffect(()=>{
        fetch(`https://shielded-beach-03067.herokuapp.com/myOrder/${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            setService(data)
        })
    },[user?.email])

    const handleDelete=(id)=>{
        const proceed=window.confirm('are you sure, you want to delete');
        fetch(`https://shielded-beach-03067.herokuapp.com/deleteOrder/${id}`,{
            method:'DELETE'
        }).then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                alert('Delete')
                const remaining=service.filter(service=>service._id !== id)
                setService(remaining)
            }
        });
        console.log(id)
    }

    const designShow = {
        width: '18rem'
    }
    return (
        <div>
            <h1>My order</h1>
            <div className="container">
                <div className="row">

                {
                        service?.map((offers)=>(
                            <div className="col-lg-6 mb-5 mt-5 col-sm-12 image-card ">
           
                            <div className="card" style={designShow}>
                                <img className="image-design" src={offers?.img} class="card-img-top" alt="..." />
                                <div class="card-body body-designs">
                                    <h3>{offers?.name}</h3>
                                    <p class="card-text">{offers?.description}.</p>
                                    <h6 className="bg-danger text-white me-5 p-1">{offers?.status}</h6>
                                  
                                  <button onClick={()=>handleDelete(offers?._id)}>Delete</button>
                                  
                                 
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

export default MyOrder;