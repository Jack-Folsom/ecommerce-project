import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {

    const {setShowSearch, getCartCount, email, password, login} = useContext(ShopContext);

  return (
    <div className='flex items-center justify-between py-5 font-medium'>
        <Link to='/'>
            <img src={assets.logo} className='w-36' alt="" />
        </Link>
        <div className='flex items-center gap-6'>
            <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt="" />

            <div className='group relative'>
                <img className='w-5 cursor-pointer' src={assets.profile_icon} alt=""/>
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                        {
                            email != '' && password != ''
                            ? <Link to='/profile'><p className='cursor-pointer hover:text-black'>Profile</p></Link>
                            : <Link to='/login'><p className='cursor-pointer hover:text-black'>Profile</p></Link>
                        }
                        <Link to='/'><p onClick={()=>login('','')} className='cursor-pointer hover:text-black'>Logout</p></Link>
                    </div>
                </div>
            </div>
            <Link to='/cart' className='relative'>
                <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
                <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
            </Link>
        </div>
    </div>
  )
}

export default Navbar