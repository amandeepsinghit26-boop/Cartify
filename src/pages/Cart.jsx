import React,{useContext} from 'react'
import Cartitem from '../components/Cartitem'
import {CartDataContext} from '../context/CartContext'
import { Link } from "react-router-dom";
const Cart = () => {
  const { cartItems,cartTotal } = useContext(CartDataContext);

  return (
    <>
   <div className='container w-fit min-h-screen px-4  mx-39'>
<div className="flex items-center mb-6">
  <Link to={"/"} className="flex items-center text-gray-400 hover:text-gray-600 ">
  <i className="ri-arrow-left-s-line mr-2"></i>
  <span>Back to Products</span>
  </Link>
  </div>
      <h1 className="text-3xl font-semibold mb-6">Shopping Cart ({cartItems.length})</h1>
      
       <div className="LeftPart grid grid-cols-1 lg:grid-cols-3 gap-10 ">
        <div className="lg:col-span-2 space-y-4">
         
        {cartItems.map((item)=>{
          return <Cartitem key={item.id} item={item} />
        })}  

        </div>
        <div className="rightPart lg:col-span-1 p-8 bg-gray-800 rounded-2xl shadow-2xl border-1-4 sticky top-20 h-fit border-gray-800 ">
          <h3 className='text-3xl font-bold text-white flex items-center border-b-2 border-gray-700 pb-4 mb-4 justify-between'>
            <div className="flex justify-between mb-2  tracking-wide">
              <span className='w-6 h-6 text-[#E94560]'>$ </span>
              <span>Order Total</span>
            </div>
          </h3>
<div className='space-y-4 text-gray-400 '>
  <div className='flex justify-between text-xl font-semibold'>
    <span>SubTotal :</span>
    <span>${cartTotal.toFixed(2)}</span>
  </div>

  <div className='flex justify-between text-xl font-semibold'>
    <span>Shipping (Express) :</span>
    <span className='text-green-500 font-semibold'>Free</span>
 </div>
 <h3 className=' border-b-2 border-gray-700 my-4'></h3>
  <div className='flex justify-between text-3xl font-bold mt-6'>
    <span className='text-white'>Estimated Total :</span>
    <span className='text-[#E94560] text-3xl font-semibold'>$ {cartTotal.toFixed(2)}</span>
 </div>
 <Link to={'/checkout'}>
 <button className="w-full mt-4 py-3 bg-[#E94560]/80 text-white font-extrabold rounded-4xl text-xl text-center hover:bg-white hover:text-[#E94560] hover:ring-2 hover:ring-[#E94560]/50 cursor-pointer transition duration-300 uppercase tracking-wider">
  <i className="ri-flashlight-line mr-2 text-lg"></i>
  Proceeed Securely</button></Link>
  <p className="text-sm text-gray-400 mt-4 flex justify-center">All transactions are encrypted and secure.</p>
</div>
  
        </div>
       </div>

   </div>
    </>
  )
}

export default Cart
