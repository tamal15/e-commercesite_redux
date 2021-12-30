import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
// import useAuth from '../../hooks/useAuth'
// import useAuth from '../../hooks/useAuth'
// import useFirebase from '../../hooks/useFirebase';
import './Login.css'

const Login = () => {


    const{GoogleLogin,handleSignInUser,user,saveUserDatabase}=useAuth()
  
    const location=useLocation()
    const history=useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const redirect_uri=location.state?.from || '/home'

    const handleGoogle=()=>{
        GoogleLogin()
        .then(result=>{
          const user = result.user;
          saveUserDatabase(user.email, user.displayName,'PUT')
            history.push(redirect_uri)
        })
    }

  
    const handleLogin = e => {
        e.preventDefault()
      
        handleSignInUser(email, password)
          .then(result => {
            history.push(redirect_uri)
        })
         .catch(err=>alert(err.message))
      }

      console.log(user)
  const handleEmail = e => setEmail(e.target.value)
  const handlePassword = e => setPassword(e.target.value)



    return (
         
        
    <div className=' mx-auto  p-5 m-5 background-design'>
    <h2 className='text-2xl font-bold'>Please Login</h2>
    <form onSubmit={handleLogin} className='text-left my-5'>
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
      <button
        type='submit'
        className='bg-dark text-white px-4 py-2  mt-3 w-full'
      >
        Login
      </button>
    </form>
    <br />
    <p>
      New User?{' '}
      <button
        className='text-blue'
        onClick={() => history.push('/register')}
      >
        Register
      </button>{' '}
    </p>
   <br/>

    <button className="googles" onClick={handleGoogle}>google</button>


   
  </div>
    );
};

export default Login;