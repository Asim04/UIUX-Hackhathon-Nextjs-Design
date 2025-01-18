import React from 'react';

interface ProductCardProps {
  description: string;
  descr:string;
  reviews: number;
  keyBenefits: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({
  description,
  descr,
  reviews,
  keyBenefits,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
        <div className='flex justify-between mb-4'></div>
        <span className='text-gray-500 flex mb-4'>
        
        <button className=' flex px-12 py-4 bg-yellow-400 rounded-md text-white mr-4'>Description</button>
        <div className='flex'><span className="text-gray-900 flex items-center">Reviews ({reviews})</span></div>
        </span>
      <div className="flex justify-between items-center mb-4">
        <h2 className="  text-gray-500 ">{description}</h2>
        <br />
        
      </div>
        <h2 className="  text-gray-500 mb-4 ">{descr}</h2>

      <ul className="list-disc pl-6">
        {keyBenefits.map((benefit, index) => (
          <li key={index} className="mb-2 text-gray-500">{benefit}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCard;