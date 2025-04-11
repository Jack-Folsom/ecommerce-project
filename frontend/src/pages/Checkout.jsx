import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const Checkout = () => {

  const [method,setMethod] = useState('credit');

  const {navigate} = useContext(ShopContext);

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* left side */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'}/>
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First Name'/>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last Name'/>
        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='email@address.com'/>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Street'/>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City'/>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State'/>
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Zipcode'/>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Country'/>
        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='(###) ###-####'/>
      </div>
    {/* left side */}
    <div className='mt-8'>
      <div className='mt-8 min-w-80'>
        <CartTotal />
      </div>
      <div className='mt-12'>
        <Title text1={'PAYMENT'} text2={'METHOD'}/>
        {/* payment method selection */}
        <div className='flex gap-3 flex-col lg:flex-row'>
          <div onClick={()=>setMethod('credit')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'credit' ? 'bg-green-400' : ''}`}></p>
            <img className='h-5 mx-4' src={assets.creditcard_logo} alt="" />
          </div>
          <div onClick={()=>setMethod('paypal')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'paypal' ? 'bg-green-400' : ''}`}></p>
            <img className='h-5 mx-4' src={assets.paypal_logo} alt="" />
          </div>
          <div onClick={()=>setMethod('googlepay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'googlepay' ? 'bg-green-400' : ''}`}></p>
            <img className='h-5 mx-4' src={assets.googlepay_logo} alt="" />
          </div>
        </div>
        <div className='w-full text-end mt-8'>
          <button onClick={()=>navigate('/profile')} className='bg-black text-white px-16 py-3 text-sm'>CHECKOUT</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Checkout
