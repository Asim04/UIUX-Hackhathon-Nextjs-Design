
import Image from 'next/image';

import { getAllPost } from '../../../sanity/lib/data';
import { TMenuItem  } from '../../../sanity/lib/data';

// // Example products data
// const products = [
//   { id: 1, name: "Fresh Lime", category: "Drink", price: 5.00, image: "/shopitem/unsplash_-GFCYhoRe48 (1).png" },
//   { id: 2, name: "Chocolate Muffin", category: "Dessert", price: 4.50, image: "/image/imgitem3.png" },
//   { id: 3, name: "Burger", category: "Burger", price: 6.00, image: "/shopitem/Rectangle 8874.png" },
//   { id: 4, name: "Country Burger", category: "Burger", price: 5.50, image: "/image/imgitme4.png" },
//   { id: 5, name: "Country Burger", category: "Burger", price: 6.50, image: "/Shop/Mask%20Group%20(2).png" },
//   { id: 6, name: "Orange", category: "Drink", price: 6.50, image: "/Shop/Mask Group (3).png" },
//   // Add more products as needed
// ];

const ProductListing = async () => {
  // const [currentPage, setCurrentPage] = useState(1);
  // const productsPerPage = 6; // Number of products per page

  // const handleNextPage = () => setCurrentPage(currentPage + 1);
  // const handlePrevPage = () => setCurrentPage(currentPage - 1);

  // // Pagination logic
  // const indexOfLastProduct = currentPage * productsPerPage;
  // const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  // const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const response = await getAllPost(); // Fetch products from Sanity
  const food: TMenuItem[] = Array.isArray(response) ? response : response.data || [];
  console.log(food);

  return (
    <div className="container mx-auto flex p-4">
      {/* Filters Sidebar */}
      <div className="w-1/4 p-4 bg-gray-100">
        <h2 className="text-[16px] font-normal mb-4 text-[#828282]">Search Products</h2>
        <input 
          type="text" 
          placeholder="Search Products" 
          className="p-2 mb-4 w-full border border-gray-300 rounded-md"
        />

        <h2 className="text-xl font-bold mb-4 text-[#333333]">Category</h2>
        <ul className="text-lg font-normal text-[#333333] space-y-2">
          <li><input type="checkbox" /> Sandwiches</li>
          <li><input type="checkbox" /> Burger</li>
          <li><input type="checkbox" /> Chicken Chup</li>
          <li><input type="checkbox" /> Drink</li>
          <li><input type="checkbox" /> Pizza</li>
        </ul>

        <h2 className="text-xl font-bold mt-4 mb-4 text-[#333333]">Filter By Price</h2>
        <input type="range" min="0" max="100" className="w-full" />
        
        <h2 className="text-xl font-bold mt-4 mb-4 text-[#333333]">Product Tags</h2>
        <div className="space-y-2 flex flex-col">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Burger</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Pizza</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Drink</button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="w-3/4 p-4">
        <div className="grid grid-cols-3 gap-4">
          {food.map(product => (
            <div key={product._id} className="border w-[230px]  rounded-md ">
              <Image
              width={100} 
              height={100}
              src={product.imageUrl} 
              alt={product.name} 
              className="w-full h-64 object-cover rounded-md mb-4" />
              <h3 className="text-lg font-bold text-[#ffff] text-center">{product.name}</h3>
              <p className="text-gray-500 text-center">{product.category}</p>
              <p className="text-lg font-semibold text-primaryColor text-center">${product.price}</p>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {/* <div className="flex justify-center mt-6">
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
        </div> */}
      </div>
    </div>
  );
};

export default ProductListing;
