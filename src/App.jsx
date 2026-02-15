import React from 'react'
import Navbar from './components/Navbar'

import ProductList from './pages/ProductList'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import ProductDetail from './pages/ProductDetail'
import Footer from './components/Footer'
import {Route,Routes} from 'react-router-dom'
  import { ToastContainer, toast,Bounce } from 'react-toastify';
import './App.css'
const App = () => {
  return (
    <>
      <Navbar/>
    <ToastContainer
position="top-right"
autoClose={1500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition={Bounce}
/>
      <Routes>
        <Route path='/' element={<ProductList/>}/>
        <Route path='/product/:id' element={<ProductDetail/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
      <Footer />
</>
  
  )
}

export default App
