import React from 'react'
import Sidebar from '../Components/BlogPage/Sidebar/SideBar'
import ImageGallery from '../Components/Blog/ImageGallary'
import Navbar from '../Components/Header/Navbar_singup'
import Common from '../Components/Hero/Common'
import Footer from '../Components/Footer/Footer'

const page = () => {

  const productImage = [
    "/item/piizaslice.png"
  ]
  return (
    <div>

      <Navbar />

      {/* <Common blog="Blog" /> */}

      <Sidebar />
      <ImageGallery images={productImage} />


      <Footer />
      
    </div>
  )
}

export default page
