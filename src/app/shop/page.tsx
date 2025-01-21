
import React from 'react';
import ProductListing from '../Components/Mesue_Shop/Products';
import Navbar from '../Components/Header/Navbar_singup';
import Footer from '../Components/Footer/Footer';
import Common from '../Components/Hero/Common';



const ShopPage = async () => {
  return (
    <div>
      <Navbar />
      {/* <Common />  */}
      <h1 className="text-4xl font-bold text-center p-4">Our Shop</h1>
      {/* @ts-expect-error Async Server Component */}
      <ProductListing />
      <Footer />
    </div>
  );
};

export default ShopPage;