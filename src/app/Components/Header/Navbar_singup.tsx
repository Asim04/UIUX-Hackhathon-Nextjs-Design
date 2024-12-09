import React from "react";

const Navbar: React.FC = () => {
    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Shop", href: "/shop" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" },
      ];
  return (
    <header className="bg-black text-white">
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        <div className="font-bold text-lg">
          <span className="text-orange-500">Food</span>truck
        </div>
        <nav className="hidden md:flex space-x-6">
          {["Home", "Menu", "Blog", "Pages", "About", "Shop", "Contact"].map((item) => (
            <a
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="hover:text-orange-500"
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="md:hidden">☰</div>
      </div>
    </header>
  );
};

export default Navbar;
