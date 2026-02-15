import React,{useContext} from 'react'
import {CartDataContext} from '../context/CartContext'
import { Link } from "react-router-dom";
const Cartitem = ({item}) => {
  const {cartItems,setCartItems, addToCart,decreaseQuantity} = useContext(CartDataContext);
  const increaseQ=()=>addToCart(item);
  const decreaseQ=()=>decreaseQuantity(item.id);
  return (
    
    <div className="flex justify-start md:flex-row items-center gap-7 bg-gray-800 p-4 rounded-2xl shadow-md cursor-pointer hover:shadow-xl transition-shadow duration-300 ">
     
       <div className="imgPart flex items-center space-x-4 pl-5 w-full sm:w-auto" >
        <img src={item.image} alt={item.name} className="w-24 h-24 object-contain bg-white p-1 rounded-lg border-2 border-gray-500" />
       </div>
    
       <div className="infoPart flex  justify-between items-center flex-grow ">
         <div className="textPart flex flex-col "> 
       <h3 className="text-white text-xl font-semibold line-clamp-1">{item.title}</h3>
       <p className="text-[#E94560] text-lg ">${item.price.toFixed(2)}</p>
    </div>
        <div className="quantityPart flex items-center space-x-4">
        <button onClick={decreaseQ} className="bg-gray-700 text-white px-3 py-1 text-xl  font-extrabold rounded-2xl hover:bg-gray-600 transition-colors duration-300">-</button>
        <span className="text-white text-lg font-medium">{item.quantity}</span>
        <button onClick={increaseQ} className="bg-gray-700 text-white px-3 py-1 text-xl  font-extrabold rounded-2xl  hover:bg-gray-600 transition-colors duration-300">+</button>
       </div>
       </div>
       <p className="text-[#E94560]/70 text-lg text-right w-fit hidden font-bold md:block ">$ {(item.price * item.quantity).toFixed(4)}</p>
       <button onClick={() => setCartItems(cartItems.filter(cartItem => cartItem.id !== item.id))} className="text-red-400 hover:text-red-500  bg-gray-600 hover:bg-gray-700 transition-all px-1 py-0.5 rounded-full duration-300 "><i className="ri-close-line text-xl font-bold"></i></button>
    </div>
 
  )
}

export default Cartitem
