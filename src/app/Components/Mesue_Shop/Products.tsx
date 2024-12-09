import Image from 'next/image';
import React, { useState } from 'react';

// Example products data
const products = [
  { id: 1, name: "Fresh Lime", category: "Drink", price: 5.00, image: "/shopitem/unsplash_-GFCYhoRe48 (1).png" },
  { id: 2, name: "Chocolate Muffin", category: "Dessert", price: 4.50, image: "/image/imgitem3.png" },
  { id: 3, name: "Burger", category: "Burger", price: 6.00, image: "/shopitem/Rectangle 8874.png" },
  { id: 4, name: "Country Burger", category: "Burger", price: 5.50, image: "/image/imgitme4.png" },
  // Add more products as needed
];

const ProductListing = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6; // Number of products per page

  const handleNextPage = () => setCurrentPage(currentPage + 1);
  const handlePrevPage = () => setCurrentPage(currentPage - 1);

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className="container mx-auto flex p-4">
      {/* Filters Sidebar */}
      <div className="w-1/4 p-4 bg-gray-100">
        <h2 className="text-xl font-semibold mb-4">Search Products</h2>
        <input 
          type="text" 
          placeholder="Search Products" 
          className="p-2 mb-4 w-full border border-gray-300 rounded-md"
        />

        <h2 className="text-xl font-semibold mb-4">Category</h2>
        <ul className="space-y-2">
          <li><input type="checkbox" /> Sandwiches</li>
          <li><input type="checkbox" /> Burger</li>
          <li><input type="checkbox" /> Chicken Chup</li>
          <li><input type="checkbox" /> Drink</li>
          <li><input type="checkbox" /> Pizza</li>
        </ul>

        <h2 className="text-xl font-semibold mt-4 mb-4">Filter By Price</h2>
        <input type="range" min="0" max="100" className="w-full" />
        
        <h2 className="text-xl font-semibold mt-4 mb-4">Product Tags</h2>
        <div className="space-x-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Burger</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Pizza</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Drink</button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="w-3/4 p-4">
        <div className="grid grid-cols-3 gap-4">
          {currentProducts.map(product => (
            <div key={product.id} className="border p-4 rounded-md">
              <Image
              width={100} 
              height={100}
              src={product.image} 
              alt={product.name} 
              className="w-full h-64 object-cover rounded-md mb-4" />
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-gray-500">{product.category}</p>
              <p className="text-lg font-semibold">${product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6">
          <button 
            onClick={handlePrevPage} 
            disabled={currentPage === 1} 
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-l-md"
          >
            &lt;
          </button>
          <button 
            onClick={handleNextPage} 
            disabled={currentPage === Math.ceil(products.length / productsPerPage)} 
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-r-md"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;