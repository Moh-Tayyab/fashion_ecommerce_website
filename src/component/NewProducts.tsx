import Image from "next/image";
import React from "react";

const NewProducts = () => {
  return (
    <section className="py-8">
      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-heading font-arimo text-4xl mb-4">
          Discover NEW Arrivals
        </h1>
        <p className="text-text text-lg">Recently added shirts!</p>
      </div>

      {/* Cards Container */}
      <div className="flex flex-wrap justify-center pt-8">
        {/* Card 1 */}
        <div className="flex flex-col items-center w-full  sm:w-1/2 md:w-1/3 lg:w-1/4">
          <Image
            src="/shirt1.jpg"
            width={295}
            height={342}
            alt="Shirt 1"
            className=""
          />
          <h2 className="text-heading font-baloo text-[16px] mt-4">
            Plain White Shirt
          </h2>
          <p className="text-primary text-center">$29.00</p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 ">
          <Image src="/shirt2.png" width={295} height={342} alt="Shirt 2" />
          <h2 className="text-heading font-baloo text-[16px] mt-4">
            Denim Jacket
          </h2>
          <p className="text-primary text-center">$69.00</p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center w-full  sm:w-1/2 md:w-1/3 lg:w-1/4">
          <Image src="/shirt3.png" width={295} height={342} alt="Shirt 3" />
          <h2 className="text-heading font-baloo text-[16px] mt-4">
            Black Polo Shirt
          </h2>
          <p className="text-primary text-center">$49.00</p>
        </div>

        {/* Card 4 */}

        <div className="flex flex-col items-center w-full  sm:w-1/2 md:w-1/3 lg:w-1/4">
          <Image src="/shirt4.png" width={295} height={342} alt="Shirt 4" />
          <h2 className="text-heading font-baloo text-[16px] mt-4">
            Blue Sweat Shirt
          </h2>
          <p className="text-primary text-center">$79.00</p>
        </div>
        {/* Card 5 */}   
        <div className="flex flex-col items-center w-full  sm:w-1/2 md:w-1/3 lg:w-1/4 pt-8">
          <Image src="/shirt5.png" width={295} height={342} alt="Shirt 5" />
          <h2 className="text-heading font-baloo text-[16px] mt-4">
            Blue Plan Shirt
          </h2>
          <p className="text-primary text-center">$49.00</p>
        </div>
        {/* Card 6 */}  
        <div className="flex flex-col items-center w-full  sm:w-1/2 md:w-1/3 lg:w-1/4 pt-8">
          <Image src="/shirt6.png" width={295} height={342} alt="Shirt 6" />
          <h2 className="text-heading font-baloo text-[16px] mt-4">
            Dark Blue Shirt
          </h2>
          <p className="text-primary text-center">$89.00</p>
        </div>
        {/* Card 7 */}  
        <div className="flex flex-col items-center w-full  sm:w-1/2 md:w-1/3 lg:w-1/4 pt-8">
          <Image src="/shirt7.png" width={295} height={342} alt="Shirt 7" />
          <h2 className="text-heading font-baloo text-[16px] mt-4">
            Outcast T Shirt
          </h2>
          <p className="text-primary text-center">$19.00</p>
        </div>
        {/* Card 8 */}  
        <div className="flex flex-col items-center w-full  sm:w-1/2 md:w-1/3 lg:w-1/4 pt-8">
          <Image src="/shirt8.png" width={295} height={342} alt="Shirt 8" />
          <h2 className="text-heading font-baloo text-[16px] mt-4">
            Polo Plan Shirt
          </h2>
          <p className="text-primary text-center">$29.00</p>
        </div> 
      </div>
    </section>
  );
};

export default NewProducts;
