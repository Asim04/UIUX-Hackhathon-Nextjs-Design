import Image from "next/image"
import imgb from "../../../../public/shopitem/unsplash_-GFCYhoRe48 (1).png"

const Common = () => {
     
  return (
    <div>

<div className="relative w-full h-[500px] bg-cover bg-center"> 
      {/* style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}> */}

      <Image
          src={imgb}
          width={1920}
          height={410}
          alt="Hero Background"
          className="w-full h-full object-cover"  // **Ensures full coverage and proper scaling of image**
          />
      

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        {/* Content */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center h-full text-white">
          <h1 className="text-4xl font-bold text-[#ffff]">Shop Details</h1>
          <p className="mt-2 text-lg flex items-center space-x-2">
            <i className="fas fa-home text-yellow-500"></i>
            <a href="/" className="text-[#fff] hover:underline hover:text-primaryColor">Home</a>
            <span className="text-gray-400"> &gt; </span> {/* **Breadcrumb separator** */}
            <span className='text-primaryColor underline-offset-1'>Shop Details</span>
          </p>
        </div>
      </div>
      
    </div>
  )
}

export default Common





