import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../../hooks/useAuth';


const Review = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const {user}=useAuth()

    const onSubmit=(data)=>{
      fetch("https://shielded-beach-03067.herokuapp.com/review", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => console.log(result));
  
      console.log(data);
    }
    return (
        <div>
             <h1>Review</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-field"
          name="name"
          value={user?.displayName}
          type="name"
          {...register("name", { required: true })}
        />
         <br />
        <br />
        <input
          className="input-field"
          name="email"
          value={user?.email}
          type="email"
          {...register("email", { required: true })}
        />
        <br />
        <br />
        <input
          className="input-field"
          name="comments"
          placeholder="Comments"
          {...register("comments", { required: true })}
        />
        <br />
        <input
          className="input-field"
          name="number"
          placeholder="number"
          {...register("number", { required: true })}
        />
        <br />

        <input
          className="submit-btn btn btn-danger mt-3"
          type="submit"
          value="Register"
        />
      </form>
        </div>
    );
};

export default Review;