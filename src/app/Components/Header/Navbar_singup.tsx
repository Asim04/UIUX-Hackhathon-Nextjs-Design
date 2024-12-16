import { ShoppingCart } from "lucide-react";
import React from "react";
import { FaUser } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";

const Navbar: React.FC = () => {
    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Shop", href: "/shop" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" },
        {}
      ];
  return (
    <header className="bg-black text-white">
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        <div className="font-bold text-lg">
          <span className="text-primaryColor">Food</span>truck
        </div>
        <nav className="hidden md:flex space-x-6">
          {["Home", "Menu", "Blog", "Pages", "About", "Shop", "Contact",].map((item) => (
            <a
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="hover:text-orange-500"
            >
              {item}
            </a>
          ))}
        </nav>
        
        <div className="flex items-center space-x-4 ">
                <input 
                  type="text"
                  placeholder="Search..."
                  className="p-2 rounded-[27px] mt-[33px] border-[1px] bg-gray-800 text-white "
                />
                <button className="bg-yellow-500 mt-[33px] px-4 py-2 rounded-[27px] text-white">
                  Search
                </button>
                
                <div className=" mt-9 flex gap-3">
                

                <FaUser />

                <FaBagShopping />
                </div>
        
              </div>
        
        <div className="md:hidden">☰</div>
      </div>
    </header>
  );
};

export default Navbar;
