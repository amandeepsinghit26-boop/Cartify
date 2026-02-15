import React, { useState, useEffect } from "react";

import { ProductData } from "../dataAPI/Product";
const CategoryFilter = ({ selectedCategory, setSelectedCategory }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const FetchData = async () => {
      const product = await ProductData();
      setData(product);
    };
    FetchData();
  },[]);

  const categories = ["All", ...new Set(data.map((item) => item.category))];

  return (
    <>
      <div className="flex flex-wrap gap-4 justify-center mb-10 border-b border-gray-700 pb-6">
        <i className="ri-price-tag-3-line mt-2 mr-2 hidden sm:block"></i>
        {categories.map((category, index) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}

            className={`px-4 py-2 bg-[#0F3460] rounded-full hover:bg-[#E94560]/80 transition-all duration-200 shadow-md  ${selectedCategory === category ? 'bg-[#E94560]/80 text-[#16213E]' : 'bg-gray-800 text-gray-300 hover:text-[#16213E]'}`}
          >
            {category}
          </button>
        ))}
      </div>
    </>
  );
};

export default CategoryFilter;
  