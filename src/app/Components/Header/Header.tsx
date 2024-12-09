
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='sticky top-0 z-10'>
      <div className='wraper w-[1320px h-[87px] mt-[45px] mx-auto'>
      <h1 className=" font-Helvetica text-2xl font-bold text-center ">
        <span className='font-Helvetica text-primaryColor text-2xl font-bold '>Food</span>tuck</h1>
      <nav className="bg-black text-white p-4 flex justify-evenly items-center">
      <ul className="hidden md:flex space-x-6">
        <Link href='/'><li>Home</li></Link>
        <Link href='/menu'><li>Menu</li></Link>
        <Link href='/blog'><li>Blog</li></Link>
        <Link href='/about'><li>About</li></Link>
        <Link href='/shop'><li>Shop</li></Link>
        <Link href='/contact'><li>Contact</li></Link>
      </ul>
      <div className="flex items-center space-x-4">
        <input 
          type="text"
          placeholder="Search..."
          className="p-2 rounded-[27px] mt-[33px] border-[1px] bg-gray-800 text-white "
        />
        <button className="bg-yellow-500 mt-[33px] px-4 py-2 rounded-[27px] text-white">
          Search
        </button>
      </div>
    </nav>
    </div>
      
    </div>
  )
}

export default Header
