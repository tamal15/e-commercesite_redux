import React, { useState } from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../../hooks/useAuth';
// import useAuth from '../../hooks/useAuth';
import './Register.css'
// import {Link} from 'react-router-dom'

const Register = () => {

    const history = useHistory()
    const [email, setEmail] =useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
  
    const { GoogleLogin, handleCreateUser,handleUpdate,isLogin ,handleSignInUser} =useAuth()
  
    const handleRegister = e => {
      e.preventDefault()
      if(isLogin){
        handleSignInUser(email,password)
      }
      else{
        handleCreateUser(email,password)
      }
      handleCreateUser(name, email, password)
    }

    const handleEmail = e => setEmail(e.target.value)
    const handlePassword = e => setPassword(e.target.value)
    const handleName = e => setName(e.target.value)



    return (
       
        <div className=' mx-auto  p-5 m-5 background-design'>
        <h2 className='text-2xl font-bold'>Please Register</h2>
        <form onSubmit={handleRegister} className='text-left my-5'>
        <div>
            <label htmlFor='name' className='emails'>
              Name:
            </label>
            <br />
           {! isLogin && 
            <input
            type='name'
            onBlur={handleUpdate}
            name='name'
            id='name'
            onChange={handleName}
            required
            className=' outline-none px-3 py-2 '
          />}
         
          </div>


          <div>
            <label htmlFor='email' className='emails'>
              Email:
            </label>
            <br />
            <input
              type='email'
              name='email'
              id='email'
              onChange={handleEmail}
              required
              className=' outline-none px-3 py-2 '
            />
          </div>
          <div className='mt-2'>
            <label htmlFor='password' className='emails'>
              Password:
            </label>
            <br />
            <input
              type='password'
              name='passowrd'
              id='password'
              onChange={handlePassword}
              required
              className='text-md outline-none px-3 py-2 '
            />
          </div>
         {/* <Link to='/login'> */}

         <button
            type='submit'
            className='bg-dark text-white px-4 py-2  mt-3 w-full'
          >
            Register
          </button>
         {/* </Link> */}
        </form>
        <br />
        <p>
          New User?{' '}
          <button
            className='text-blue'
            onClick={() => history.push('/login')}
          >
            Login
          </button>{' '}
        </p>
       <br/>
    
        <button className="googles" onClick={GoogleLogin}>google</button>
    
    
       
      </div>

    );
};

export default Register;