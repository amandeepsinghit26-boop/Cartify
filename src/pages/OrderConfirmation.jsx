import React from "react";
import { Link } from "react-router-dom";

const OrderConfirmation = ({ deliveryDetails }) => {
  return (
    <div className="container h-fit mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-gray-900 rounded-3xl shadow-[-10px_0_20px_rgba(0,0,0,0.4)] p-5 border border-green-300 ">
        <h2
          className="text-3xl flex flex-col items-center font-bold 
        text-center text-white mb-2"
        >
          <i className="ri-checkbox-circle-line mr-2 mb-2 text-green-500 text-8xl"></i>
          Order Confirmed!
        </h2>
        <p className="text-gray-300 text-center mb-6">
          Thank you for your purchase. Your order details are below:
        </p>
        <div className="bg-green-500/20 rounded-xl border border-green-500/10 p-6 mb-6">
          <h3 className="text-xl font-semibold text-white mb-4">
            Delivery Details
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <span className="capitalize">Name:</span> {deliveryDetails?.name}
            </li>
            <li>
              <span className="capitalize">Address:</span>{" "}
              {deliveryDetails?.address}
            </li>
            <li>
              <span className="capitalize">City:</span> {deliveryDetails?.city}
            </li>
            <li>
              <span className="capitalize">Postal Code:</span>{" "}
              {deliveryDetails?.postalCode}
            </li>
          </ul>
        </div>
        <div className="text-center">
          <Link
            to="/"
            className="inline-block w-full px-6 py-3 bg-[#E94560]/80 text-white font-bold rounded-full hover:bg-white hover:text-[#E94560] transition duration-300"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
