import React, { useContext } from "react";
import { CartDataContext } from "../context/CartContext";
import { Link, useParams, useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const { products, cartItems, addToCart } = useContext(CartDataContext);
  const { id } = useParams();
  const navigate = useNavigate();

  // Handle loading state
  if (!products || products.length === 0) {
    return (
      <div className="text-center text-xl font-bold mt-10">Loading...</div>
    );
  }

  const selectedData = products.find((item) => item.id === parseInt(id));

  // Handle invalid product ID
  if (!selectedData) {
    return (
      <div className="text-center text-xl font-bold mt-10">
        Product not found
      </div>
    );
  }

  return (
    <div className="max-w-4xl  mx-auto h-120 p-3 bg-[#0F3460] rounded-lg shadow-md relative mt-5">
      {/* Back Button */}
      <div
        className="absolute top-3 left-6 flex items-center gap-1.5 cursor-pointer text-red-500"
        onClick={() => navigate('/') }
      >
        <i className="ri-arrow-left-s-line text-2xl"></i>
        <p>Back to All Products</p>
      </div>

      <div className="flex flex-col md:flex-row h-100 items-end justify-center ">
        {/* Left */}
        <div className="md:w-1/2 h-90  bg-white rounded-2xl p-4">
          <img
            src={selectedData.image}
            alt={selectedData.title}
            className="w-full h-full object-contain  mx-auto "
          />
        </div>

        {/* Right */}
        <div className="md:w-1/2  h-80 md:pl-8 mt-2 flex flex-col gap-2">
          <h1 className="text-3xl font-bold">{selectedData.title}</h1>

          <p className="text-xl font-bold text-[#E94560]">
            ${selectedData?.price?.toFixed(2)}
          </p>

          <div className="flex items-center gap-2">
            <i className="ri-price-tag-3-line text-[#E94560] text-xl"></i>
            <h2 className="text-2xl font-semibold">Product Overview</h2>
          </div>

          <p className="text-gray-400 ">{selectedData.description}</p>

          {/* Add to Cart */}
          <button
            onClick={() => addToCart(selectedData)}
            className="bg-[#E94560] w-full text-white py-1 px-3 rounded-3xl
              hover:bg-white hover:border-[#E94560] border-2
              hover:text-[#E94560] hover:scale-105
              flex items-center justify-center
              text-xl font-bold transition duration-200 uppercase"
          >
            <i className="ri-shopping-cart-2-fill mr-3"></i>
            Add to Cart
          </button>

          {/* Keep Shopping */}
          <Link to="/">
            <button
              className="bg-[#0F3460]  w-full flex items-center justify-center
                border border-[#E94560] text-[#E94560]/80 py-2 px-4
                rounded-3xl cursor-pointer hover:bg-[#E94560]/10
                hover:scale-105 hover:text-white transition duration-200 uppercase"
            >
              Keep Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
