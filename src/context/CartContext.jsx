  import { ToastContainer, toast,Bounce } from 'react-toastify';
import React, { useState, useEffect, createContext, useMemo } from "react";
import { ProductData } from "../dataAPI/Product";
export const CartDataContext = createContext();
const CartContext = (props) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const FetchData = async () => {
    const data = await ProductData();
    setProducts(data);
  };
  useEffect(() => {
    FetchData();
  }, []);
  const addToCart = (product) => {
  toast.success('Product added to cart!', {
position: "top-right",
autoClose: 1500,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Bounce,
});
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);

      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };
const decreaseQuantity = (id) => {
  setCartItems((prev) =>
    prev
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0) 
  );
};

  const cartTotal = useMemo(() => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  }, [cartItems]);

  return (
    <div>
      <CartDataContext.Provider value={{ products, cartItems,setCartItems, addToCart,cartTotal,decreaseQuantity }}>
        {props.children}
      </CartDataContext.Provider>
    </div>
  );
};

export default CartContext;
