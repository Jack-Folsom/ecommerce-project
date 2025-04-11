import React, { useContext } from 'react'
import Orders from '../components/Orders'
import { ShopContext } from '../context/ShopContext';

const UserProfile = () => {

  const {email,password} = useContext(ShopContext);

  return (
    <div>
      <Orders />
    </div>
  )
}

export default UserProfile
