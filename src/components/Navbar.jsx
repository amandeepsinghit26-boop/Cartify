import React,{useContext} from "react";
import {Link} from 'react-router-dom'
import {CartDataContext} from '../context/CartContext'
const Navbar = () => {
  const {products, cartItems, addToCart} = useContext(CartDataContext);
  return (
    <div className="sticky  top-0 z-10 bg-[#16213E] navbar mb-4">
        <header className='  shadow-lg shadow-black/30 z-50'>
   <div className='nav-container font-serif flex justify-between items-center px-36 py-4 text-4xl'>
     <Link to={'/'}>
      <div className="nav1 flex gap-3 text-3xl text-white cursor-pointer ">
        <i className="ri-home-8-line text-[#E94560] text-5xl"></i>
        <h2 className="font-extrabold text-3xl tracking-wide">
          CART <span className="text-[#E94560] text-5xl">ify</span>
        </h2>
      </div>
    </Link>
     <Link to={'/cart'}>
       <div className="relative">
    <i className="ri-shopping-cart-2-line text-white text-4xl border-1 border-[#E94560] rounded-2xl px-2 py-2 cursor-pointer hover:text-[#E94560] transition-colors duration-200"></i>

      {cartItems.length > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white
          text-xs w-5 h-5 flex items-center justify-center rounded-full transition-all duration-300">
          {cartItems.length}
        </span>
      )}
    </div>
      </Link>
   </div>
   </header>

    </div>
  );
};

export default Navbar;
