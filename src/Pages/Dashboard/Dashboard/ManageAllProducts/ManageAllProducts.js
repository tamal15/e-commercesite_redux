import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const ManageAllProducts = () => {
    const [order,setOrder]=useState([])
    const { register, handleSubmit } = useForm();
    const [orderId,setOrderId]=useState('')

    useEffect(()=>{
        fetch('https://shielded-beach-03067.herokuapp.com/manageOrder')
        .then(res=>res.json())
        .then(data=>{
            setOrder(data)
        })
    },[])

    const onSubmit=(data)=>{

      fetch(`https://shielded-beach-03067.herokuapp.com/updateStatus/${orderId}`,{
        method:'PUT',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(data)
      })
      .then(res=>res.json())
      .then(result=>console.log(result))

    }
    const handleOrderId = (id) => {
        setOrderId(id);
        console.log(id);
      };
    return (
        <div>
             <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Service Title</th>
            <th>Event description</th>
            <th>Image Link</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        {order?.map((pd, index) => (
          <tbody>
            <tr>
              <td>{index}</td>
              <td>{pd.name}</td>
              <td>{pd.description}</td>
              <td>{pd?.img}</td>
              <td>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <select
                    onClick={() => handleOrderId(pd?._id)}
                    {...register("status")}
                  >
                    <option value={pd?.status}>{pd?.status}</option>
                    <option value="Shipped">Shipped</option>
                    <option value="done">Done</option>
                  </select>
                  <input type="submit" />
                </form>
              </td>
              <button className="btn bg-danger p-2">Delete</button>
           
            </tr>
          </tbody>
        ))}
      </Table>
            
        </div>
    );
};

export default ManageAllProducts;