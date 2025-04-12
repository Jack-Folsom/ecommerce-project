import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const OrderSummary = () => {

    const {currency,cartItems,products} = useContext(ShopContext);

    const [cartData,setCartData] = useState([]);
    
      useEffect(()=>{
        const tempData = [];
    
        for (const items in cartItems) {
          for (const item in cartItems[items]) {
            if (cartItems[items][item] > 0) {
              tempData.push({
                _id: items,
                size: item,
                quantity: cartItems[items][item]
              })
            }
          }
        }
    
        setCartData(tempData);
      },[cartItems])

  return (
    <div className='mb-8'>
      <div className='border-b'>
        <div className='text-2xl'>
            <Title text1={'ORDER'} text2={'SUMMARY'}/>
        </div>
        {
            cartData.map((item,index)=>{
                const productData = products.find((product)=>product._id === item._id);
                return (
                    <div key={index} className='py-4 border-t text-gray-700 grid grid-col items-center gap-4'>
                        <div className='flex items-start gap-6'>
                            <img className='w-16 sm:w-20' src={productData.image[0]} alt="" />
                            <div className='w-full'>
                                <div>
                                    <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                                </div>
                                <div className='flex items-center justify-between gap-5 mt-2'>
                                    <div>
                                        <p>Quantity: {item.quantity}</p>
                                        <p>Size: {item.size}</p>
                                        <p>Price: {currency}{productData.price}.00</p>
                                    </div>
                                    <p>{currency}{productData.price * item.quantity}.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default OrderSummary
