import React, { useState, useContext } from "react";
import { CartDataContext } from "../context/CartContext";
import OrderConfirmation from "../pages/OrderConfirmation";
const Checkout = () => {
  const {cartItems, cartTotal,decreaseQuantity } = useContext(CartDataContext);
  const [isConfirm, setIsConfirm] = useState(false)
  const [deliveryDetails, setDeliveryDetails] = useState({
    name: "",
    address: "",
    city: "",
    postalCode: ""
   
  });
const handleChange = (e) => {
    const { name, value } = e.target;
    setDeliveryDetails((prevDetails) => ({  
      ...prevDetails,
      [name]: value,
    }));
  };
  const clearForm = () => {
    setDeliveryDetails({
      name: "",
      address: "",
      city: "",
      postalCode: ""
    });
  };
  const handleSubmit = (e) => {
  e.preventDefault();
  
  const detailsCopy = { ...deliveryDetails }; // copy save
  setDeliveryDetails(detailsCopy);
  setIsConfirm(true);
};

  if (isConfirm) {
    return (
      
         <OrderConfirmation deliveryDetails={deliveryDetails} />
     
    );
  }
 
  
  return (
    <>
      <div className="container  w-full h-fit px-20 md:px-8 lg:px-16 py-2">
        <h2 className="text-2xl font-bold mb-4 text-white tracking-tight">
          Finalize Order
        </h2>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 p-8 bg-gray-900 rounded-2xl shadow-2xl border border-gray-700">
            <h3 className="text-3xl font-bold text-[#E94560]/70 mb-4 flex items-center gap-2 border-b border-gray-700 pb-3">
              <i className="ri-map-pin-line"></i>
              <span>Delivery Details</span>
            </h3>
            <form onSubmit={handleSubmit}>
              {Object.keys(deliveryDetails).map((key) => {
                return (
                  <div key={key}>
                    <label
                      htmlFor={key}
                      className="block mt-2 text-white font-medium mb-2"
                    >
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </label>
                    <input
                      type={key==="postalCode"?"number":"text"}
                      id={key}
                      name={key}
                      value={deliveryDetails[key]}
                      required
                      onChange={handleChange}
                      className="w-full p-2 mt-1 px-5 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#E94560]"
                    />
                  </div>
                );
              })}
               <button
               type="submit" className="w-full mt-4 py-3 bg-[#E94560]/80 text-white font-extrabold rounded-4xl text-xl text-center hover:bg-white hover:text-[#E94560] hover:ring-2 hover:ring-[#E94560]/50 cursor-pointer transition duration-300 uppercase tracking-wider">
  <i className="ri-flashlight-line mr-2 text-lg"></i>
  $ pay and confirm order (${cartTotal})</button>
            </form>
          </div>
         
         <div className="rightPart lg:col-span-1 p-8 bg-gray-800 rounded-2xl  border-1-4 sticky top-20 h-fit border-gray-800 shadow-[-8px_0_20px_rgba(0,0,0,0.4)]">
          <h3 className='text-3xl font-bold text-white flex items-center border-b-2 border-gray-700 pb-4 mb-4 justify-between'>
            <div className="flex justify-between ml-2 mb-2 gap-2 tracking-wide">
              <i className="ri-instance-line mr-2 text-3xl"></i>
              <span>Summary</span>
            </div>
          </h3>
          <div className="space-y-4 text-gray-400">
            {cartItems.map((item)=>{
              return <div key={item.id} className="flex justify-between items-center border-b border-gray-700 pb-2">
<span className='truncate'>{item.title} x {item.quantity}</span>
<span className='text-[#E94560] font-semibold'>$ {(item.price*item.quantity).toFixed(2)}</span>
              </div>
            })}
          </div>
<div className='space-y-4 text-gray-400 mt-4 '>
  <div className='flex justify-between text-xl font-semibold'>
    <span>SubTotal :</span>
    <span className='text-white font-bold'>${cartTotal.toFixed(2)}</span>
  </div>

  <div className='flex justify-between text-xl font-semibold'>
    <span>Shipping (Express) :</span>
    <span className='text-green-500 font-semibold'>Free</span>
 </div>
 <h3 className=' border-b-2 border-gray-700 my-4'></h3>
  <div className='flex justify-between text-3xl font-bold mt-6'>
    <span className='text-white'> Total Due:</span>
    <span className='text-[#E94560] text-3xl font-semibold'>$ {cartTotal.toFixed(2)}</span>
 </div>
</div>
</div>

        </div>
      </div>
    </>
  )
};

export default Checkout;
