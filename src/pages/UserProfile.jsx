import React, { useContext } from 'react'
import Orders from '../components/Orders'
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';

const UserProfile = () => {

  const {name,email,password} = useContext(ShopContext);

  return (
    <div>
      <div className='border-t pt-16 text-2xl'>
        <Title text1={'PROFILE'} text2={'INFORMATION'}/>
        <div className='border-t'>
          <p className='mt-5 text-gray-700 md-:w-4/5 text-base font-sm'>Name: {name}</p>
          <p className='mt-5 text-gray-700 md-:w-4/5 text-base font-sm'>Email: {email}</p>
          <p className='mt-5 text-gray-700 md-:w-4/5 text-base font-sm'>Password: {password}</p>
        </div>
      </div>
      <Orders />
    </div>
  )
}

export default UserProfile
