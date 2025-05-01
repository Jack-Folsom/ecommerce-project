import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import { toast } from "react-toastify";
import OrderSummary from '../components/OrderSummary'

const Checkout = () => {

  const [method,setMethod] = useState('Credit');

  const {navigate,addToOrders} = useContext(ShopContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    toast.success('Order Placed');
    navigate('/profile');
    addToOrders();
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* left side */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'}/>
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First Name' required/>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last Name' required/>
        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='email@address.com' required/>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Street' required/>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City' required/>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State' required/>
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Zipcode' required/>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Country' required/>
        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Phone Number' required/>

        {/* payment method selection */}
        <div className='py-5'>
          <div className='text-xl sm:text-2xl my-3'>
            <Title text1={'PAYMENT'} text2={'METHOD'}/>
          </div>
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={()=>setMethod('Credit')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'Credit' ? 'bg-green-400' : ''}`}></p>
              <img className='h-5 mx-4' src={assets.creditcard_logo} alt="" />
            </div>
            <div onClick={()=>setMethod('PayPal')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'PayPal' ? 'bg-green-400' : ''}`}></p>
              <img className='h-5 mx-4' src={assets.paypal_logo} alt="" />
            </div>
            <div onClick={()=>setMethod('GooglePay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'GooglePay' ? 'bg-green-400' : ''}`}></p>
              <img className='h-5 mx-4' src={assets.googlepay_logo} alt="" />
            </div>
          </div>
        </div>

        {
          method === 'Credit'
          ? (
          <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
            <div className='text-xl sm:text-2xl my-3'>
              <Title text1={'PAYMENT'} text2={'INFORMATION'}/>
            </div>
            <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Card Number' required/>
            <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Name On Card' required/>
            <div className='flex gap-3'>
              <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Exp. Date' required/>
              <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Security Code' required/>
            </div>
          </div>
           ) : ''
        }
        
      </div>
      {/* right side */}
      <div className='mt-3 w-full max-w-[500px] ml-10'>
        <div className='min-w-80'>
          <OrderSummary />
          <CartTotal />
        </div>
        <div className='mt-12'>
          <div className='w-full text-end mt-8'>
            <button type='submit' className='bg-black text-white px-16 py-3 text-sm'>CHECKOUT{method != 'Credit' ? ` WITH ${method}` : ''}</button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Checkout
