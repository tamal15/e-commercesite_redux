
import { useForm } from "react-hook-form";
import Navigation from "../../Shared/Navigation/Navigation";
import './AddProducts.css'
import axios from 'axios';

const AddProducts = () => {
    const { register, handleSubmit ,reset} = useForm();
    
    const onSubmit= (data) =>{
        // console.log(data)
      
        axios.post('https://shielded-beach-03067.herokuapp.com/bike',data)
      .then(res=>{
          console.log(res)
           if(res.data.insertedId){
              alert('added successfully');
              reset()
          }
      })
        //  e.preventDefault()
    }
    return (
        <div className="submits">
            <Navigation></Navigation>
            <h1>Add new Products</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
 <input {...register("name", { required: true, maxLength: 20 })} placeholder="name" />
 <textarea {...register("description")} placeholder="description"/>
 <input type="number" {...register("price")} placeholder="price" />
 <input {...register("img")} placeholder="img url"/>
 <input type="submit" />
</form>
       
   </div>
    );
};

export default AddProducts;