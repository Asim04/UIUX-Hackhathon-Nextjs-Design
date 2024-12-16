import Image from "next/image"
import img2 from "../../../../public/shopitem/unsplash_akwA-GPF710.png"

const Drink = () => {
  return (
    <div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 py-10 max-w-6xl mx-auto">
        <div>
            {/* <Image 
                src={img1}
                width={24}
                height={24}
                alt="cofee cup"
                className="text-primaryColor  border-[15px]"
            /> */}

          <h2 className="text-5xl font-bold text-primaryColor mb-4">Our Drink</h2>
          <div className="space-y-4">
            {[
              {
                
                title: 'Caffè macchiato',
                description: 'Toasted French bread topped with romano, cheddar',
                price: '32$',
                calories: '560 CAL',
              },
              {
                title: 'Aperol Spritz Capacianno',
                description: 'Gorgonzola, ricotta, mozzarella, taleggio',
                price: '43$',
                calories: '700 CAL',
              },
              {
                title: 'Caffe Latte Campuri',
                description: 'Ground cumin, avocados, peeled and cubed',
                price: '14$',
                calories: '1000 CAL',
              },
              {
                title: 'Tormentoso BushTea Pintoage',
                description: 'Spreadable cream cheese, crumbled blue cheese',
                price: '35$',
                calories: '560 CAL',
              },
            ].map((item, index) => (
              <div key={index} className="flex justify-between items-start">
                <div>

                  <div className="wid-[32px] h-[28px]">
                  <h4 className="text-2xl font-bold text-white]">{item.title}</h4>
                  </div>

                  <div className="w-[368px] h-[24px] mt-[7px]">
                  <p className="text-[13px] font-normal text-white">{item.description}</p>
                  </div>

                  <div className="w[63px] h-[24px]">
                  <p className="text-base textwhite font-normal mt-[8px]">{item.calories}</p>
                  </div>

                </div>
                <span className="text-lg font-bold text-orange-500">{item.price}</span>
              </div>
            ))}
          </div>
        </div>


        <div className="[448px]  h-[626]">
          <Image
            src={img2}
            width={400}
            height={624}
            alt="Main Course"
            className="w-full h-auto rounded-lg object-cover shadow-md"
          />
        </div>
      </div>
      
    </div>
  )
}

export default Drink