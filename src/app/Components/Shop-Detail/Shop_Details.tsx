import Image from "next/image"
import img from "../../../../public/Shop-Detail/Rectangle 8883.png"
import img1 from "../../../../public/Shop-Detail/Rectangle 8884.png"
import img2 from "../../../../public/Shop-Detail/Rectangle 8885.png"
import img3 from "../../../../public/Shop-Detail/Rectangle 8886.png"
import img4 from "../../../../public/Shop-Detail/Rectangle 8887.png"
import { Star } from "lucide-react"


const Shop_Details = () => {
  return (
    <div>

<>

  <section className=" bg-white text-gray-600 body-font overflow-hidden">
    <div className="container px-5 py-24 mx-auto">
      <div className="lg:w-4/5 mx-auto flex  ">

            <div className="flex flex-col gap-12 pr-4 ">

            <Image 
            src={img1} 
            width={0}
            height={0}
            alt="" />

            <Image 
            src={img2} 
            width={0}
            height={0}
            alt="" />

            <Image 
            src={img3} 
            width={0}
            height={0}
            alt="" />

            <Image 
            src={img4} 
            width={0}
            height={0}
            alt="" />
            
            </div>
       

        <Image
          alt="ecommerce"
          
          className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
          src={img}
          width={0}
          height={50}
          
        />

       


       

        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h2 className="  rounded-lg py-1 px-4 inline bg-primaryColor text-sm title-font text-gray-500 tracking-widest">
            In Stock
          </h2>
          <h1 className="text-[#333333] text-4xl title-font font-b mb-1">
          Yummy Chicken Chup
          </h1>
          <div className="flex mb-4">
            
          </div>
          <p className="leading-relaxed border-b pb-2">
            Fam locavore kickstarter distillery. Mixtape chillwave tumeric
            sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
            juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
            seitan poutine tumeric. Gastropub blue bottle austin listicle
            pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.
          </p>
            
            <span className=" mt-[32px] font-bold text-3xl text-gray-900">
              $58.00
            </span>
            
            <div className="flex gap-2">
                
            <span className="flex gap-2 text-primaryColor bg-pr"><Star /><Star /><Star /><Star /><Star /></span> |
            <span>5.0 Rating</span> |
            <span>22 Review</span>
            </div>

            <p className="mt-[22px]">Dictum/cursus/Risus</p>

          <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
            <div className="flex">
              <span className="mr-3">Color</span>
              <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none" />
              <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none" />
              <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none" />
            </div>
            <div className="flex ml-6 items-center">
              <span className="mr-3">Size</span>
              <div className="relative">
                <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                  <option>SM</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
              
              </div>
            </div>
          </div>
          <div className="flex">
           
            <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
              Button
            </button>
           
          </div>
        </div>
      </div>
    </div>
  </section>
  GitHub

</>

      
    </div>
// =============================================================






  )
}

export default Shop_Details




