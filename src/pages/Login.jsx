import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import { toast } from "react-toastify";

const Login = () => {

  const [currentState, setCurrentState] = useState('Login');
  const {login,navigate} = useContext(ShopContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    login(formData.name,formData.email,formData.password);
    navigate('/profile');
  }

  const forgetHandler = async () => {
    toast.success('Email Sent');
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800'/>
      </div>
      {currentState === 'Login' ? '' : <input name='name' type="text" value={formData.name} onChange={handleChange} className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required/>}
      <input name='email' type="email" value={formData.email} onChange={handleChange} className='w-full px-3 py-2 border border-gray-800' placeholder='email@account.com' required/>
      <input name='password' type="password" value={formData.password} onChange={handleChange} className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required/>
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p onClick={forgetHandler} className='cursor-pointer'>Forgot Password?</p>
        {
          currentState === 'Login'
          ? <p onClick={()=>setCurrentState('Sign Up')} className='cursor-pointer'>Create Account</p>
          : <p onClick={()=>setCurrentState('Login')} className='cursor-pointer'>Login</p>
        }
      </div>
      <button type='submit' className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
    </form>
  )
}

export default Login
