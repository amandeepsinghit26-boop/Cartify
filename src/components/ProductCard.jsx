import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import { CartDataContext } from "../context/CartContext";
const ProductCard = ({product}) => {
  const {products, cartItems, addToCart} = useContext(CartDataContext);
    if (!product) return null;
  return (
    <>
    <div className="bg-bgCard rounded-xl overflow-hidden bg-[#16213E] hover:bg-[#0F3460] hover:scale-95 transition duration-300 shadow hover:shadow-lg hover:shadow-black relative">
 
  <Link to={`/product/${product.id}`}>
  <div className="w-full h-56 bg-gray-100 hover:scale-105 transition-transform duration-300 relative overflow-hidden">
    <img
      src={product.image}
      alt={product.title}
      className="w-full h-full object-contain p-4 overflow-hidden"
    />
  </div></Link>

  {/* CONTENT */}
  <div className="p-4 ">
    <Link to={`/product/${product.id}`}>
    <h3 className="text-xl font-extrabold line-clamp-2 hover:text-[#E94560] transition-colors duration-200 mb-2">
      {product.title}
    </h3>
    <p className="text-gray-300 text-sm line-clamp-3  ">
      {product.description?.slice(0, 100)|| ''}...
    </p>
    <p className="bg-[#E94560] absolute top-43 left-3 w-fit px-4 py-2 rounded-2xl font-bold mt-2 hover:bg-white hover:text-[#E94560] hover:scale-105">${product.price}</p></Link>
    <p className="text-gray-300 text-sm line-clamp-3 mt-4 border  w-fit px-2 py-1 rounded-full bg-gray-800 hover:bg-gray-700 cursor-pointer">
      {product.category}
    </p>
  
     
      <button onClick={() => addToCart(product)}
       className="w-full mt-4 bg-[#E94560] hover:bg-white hover:text-[#E94560] text-white font-bold py-2 px-4 rounded-3xl transition-colors duration-200">
        <i className="ri-shopping-cart-2-line mr-2"></i>
        Add to Cart
      </button>
     
  
  </div>
</div>

    </>
  )
}

export default ProductCard
