import React from 'react'

const SearchFilter = ({ searchTerm, setSearchTerm }) => {
  return (
    <>
      <div className="search-filter mb-5 p-5 mx-36 bg-gray-900 rounded-2xl shadow-xl shadow-black/30 border border-gray-700">
<div className="flex items-center border border-gray-700 rounded-xl overflow-hidden focus-within:ring-4 focus-within:ring-[#E94560]/30 transition-all duration-300 bg-gray-800">
        <div className="search-icon px-4 text-gray-400">
          <i className="ri-search-line text-2xl"></i>
        </div>
     
<input className='w-full px-4 py-2 bg-transparent text-white focus:outline-none' type="text" placeholder="Search products..." 
value={searchTerm}
onChange={(e) => setSearchTerm(e.target.value)}

/>

        </div>
</div>
    </>
  )
}

export default SearchFilter
