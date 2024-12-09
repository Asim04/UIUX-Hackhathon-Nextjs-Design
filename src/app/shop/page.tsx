"use client"
import React from 'react';
import ProductListing from '../Components/Mesue_Shop/Products';
import Navbar from '../Components/Header/Navbar_singup';

const ShopPage = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-4xl font-bold text-center p-4">Our Shop</h1>
      <ProductListing />
    </div>
  );
};

export default ShopPage;