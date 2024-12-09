
import Image from 'next/image';
import img1 from "../../../../public/shopitem/Rectangle 8874.png"




const Menue_shop = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 py-10 max-w-6xl mx-auto">
      <div >
        <Image
          src={img1}
          width={448}
          height={626}
          alt="Starter Dish"
          className="w-full h-auto rounded-lg object-cover ml-[3px]"
        />
      </div>
      <div>
        <h2 className="text-[48px] font-bold text-slate-300 mb-4 leadinf-[26px]">Starter Menu</h2>
        <div className="space-y-4">
          {[
            {
              title: 'Alder Grilled Chinook Salmon',
              description: 'Toasted French bread topped with romano, cheddar',
              price: '32$',
              calories: '560 CAL',
            },
            {
              title: 'Berries and creme tart',
              description: 'Gorgonzola, ricotta, mozzarella, taleggio',
              price: '43$',
              calories: '700 CAL',
            },
            {
              title: 'Tormentoso Bush Pizza Pintoage',
              description: 'Ground cumin, avocados, peeled and cubed',
              price: '14$',
              calories: '1000 CAL',
            },
            {
              title: 'Spicy Vegan Potato Curry',
              description: 'Spreadable cream cheese, crumbled blue cheese',
              price: '35$',
              calories: '560 CAL',
            },
          ].map((item, index) => (
            <div key={index} className="flex justify-between items-start">
              <div>
                <h4 className="text-[30px] font-semibold text-gray-700 leading-[20px]">{item.title}</h4>
                <p className="text-sm text-slate-300">{item.description}</p>
                <p className="text-sm text-gray-400">{item.calories}</p>
              </div>
              <span className="text-lg font-bold text-orange-500">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



export default Menue_shop
