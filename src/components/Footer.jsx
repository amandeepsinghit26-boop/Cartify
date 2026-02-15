import React from 'react'

const Footer = () => {
  return (
    <div className=" w-full bottom-0 bg-gray-900 h-fit text-gray-400 py-2 mt-10 border-t border-gray-700">
      <div className="container mx-auto px-4 text-center " >
        <p>&copy; {new Date().getFullYear()} Cartify. All rights reserved.
          <span className="text-[#E94560]/90 block mt-2 text-sm">Advanced E-commerce Simulation</span>
        </p>
      </div>
      
    </div>
  )
}

export default Footer
