import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import Navigation from '../Shared/Navigation/Navigation';

const DetailsProducts = () => {
    const [details, setDetails]=useState({})
    const {id}=useParams()
    const { register, handleSubmit,reset } = useForm();
    const {user}=useAuth()

    useEffect(()=>{
        fetch(`https://shielded-beach-03067.herokuapp.com/bike/${id}`)
        .then(res=>res.json())
        .then(data=>setDetails(data))
    },[])
    const designShow = {
        width: '18rem'
    }

    const onSubmit=(data)=>{
        data.email=user?.email
        data.status="pending"
        console.log(data)
        // fetch('https://shielded-beach-03067.herokuapp.com/bike')
          // myorder data form passing database 
          fetch('https://shielded-beach-03067.herokuapp.com/myOrder',{
              method:'POST',
              headers:{
                  'content-type':'application/json'
              },
              body:JSON.stringify(data)
          })
          .then(res=>res.json())
          .then(result=>console.log(result));
          console.log(data)
    }

  
   

    return (
        <div>
            <Navigation></Navigation>
             <div className="container">
      
      <div className="row">
      <div className="col-lg-4 mb-5 mt-5 col-sm-12 image-card ">
     <div className="card" style={designShow}>
         <img className="image-design" src={details.img} class="card-img-top" alt="..." />
         <div class="card-body body-designs">
             <h3>{details.name}</h3>
             <h3>{details.price}</h3>
             <p class="card-text">{details.description}.</p>
            
             {/* <Link> <button>update</button></Link> */}
          
         </div>

        


     </div>
    
 </div>

 <div className="col-lg-8">
 <div className="submits">
          <form onSubmit={handleSubmit(onSubmit)}>
   <input {...register("name", { required: true, maxLength: 20 })} placeholder="name" defaultValue={details.name} />
   <textarea {...register("description")} placeholder="description" defaultValue={details.description}/>
  
   <input
                {...register("price", { required: true })}
                placeholder="price"
                defaultValue={details?.price}
                type="number"
                className="p-2 m-2  input-field"
              />

   <input
            {...register("image", { required: true })}
                placeholder="Image Link"
                defaultValue={details?.img}
                className="p-2 m-2  input-field"
              />

     <input
            {...register("date")}
              type="date"
                className="p-2 m-2"
              />



   <input type="submit" />
 </form>
         
     </div>

     </div>
      </div>

  </div>
        </div>
    );
};

export default DetailsProducts;