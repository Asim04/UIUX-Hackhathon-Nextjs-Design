
import Image from "next/image"
import img1 from "../../../../public/shopitem/Coffee.png"
import img2 from "../../../../public/shopitem/unsplash_-GFCYhoRe48 (1).png"





const MainCourse = () => {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 py-10 max-w-6xl mx-auto">
        <div>
            <Image 
                src={img1}
                width={24}
                height={24}
                alt="cofee cup"
                className="text-primaryColor  border-[15px]"
            />
          <h2 className="text-3xl font-bold text-primaryColor mb-4">Main Course</h2>
          <div className="space-y-4">
            {[
              {
                title: 'Optic Big Breakfast Combo Menu',
                description: 'Toasted French bread topped with romano, cheddar',
                price: '32$',
                calories: '560 CAL',
              },
              {
                title: 'Cashew Chicken With Stir-Fry',
                description: 'Gorgonzola, ricotta, mozzarella, taleggio',
                price: '43$',
                calories: '700 CAL',
              },
              {
                title: 'Vegetables & Green Salad',
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
                  <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                  <p className="text-sm text-gray-500">{item.description}</p>
                  <p className="text-sm text-gray-400">{item.calories}</p>
                </div>
                <span className="text-lg font-bold text-orange-500">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <Image
            src={img2}
            width={24}
            height={24}
            alt="Main Course"
            className="w-full h-auto rounded-lg object-cover shadow-md"
          />
        </div>
      </div>
    )
  }
  
  export default MainCourse