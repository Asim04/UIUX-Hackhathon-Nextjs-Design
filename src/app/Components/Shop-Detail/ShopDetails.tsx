import Image from 'next/image';
import React from 'react';

interface ProductProps {
  name: string;
  description: string;
  price: string;
  rating: string;
  reviews: number;
  images: string[];
  category: string;
  tags: string[];
  socialMediaLinks: {
    facebook: string;
    twitter: string;
    instagram: string;
  };
}

const ProductCard: React.FC<ProductProps> = ({
  name,
  description,
  price,
  rating,
  reviews,
  images,
  category,
  tags,
  socialMediaLinks,
}) => {
  return (
    <div className=" flex bg-white rounded-lg shadow-md overflow-hidden">
      

      {/* left side image small */}
      <div className="grid grid-cols-4 gap-2 p-4 ">
        <div className='flex-col items-center space-y-12'>
        {images.slice(1).map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Product image ${index + 1}`}
            width={75}
            height={75}
            // objectFit="cover"
            className="rounded-md"
          />
          
        ))}
        </div>
      </div>

      {/* right Image*/}
      <Image
        src={images[0]}
        alt={name}
        width={100}
        height={100}
        // objectFit="cover"
        className="w-[491px] h-[596px]"
      />

    {/* End Image Secction */}


      <div className="flex space-x-2 mt-4">
        <a href={socialMediaLinks.facebook} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
        <a href={socialMediaLinks.twitter} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href={socialMediaLinks.instagram} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export default ProductCard;