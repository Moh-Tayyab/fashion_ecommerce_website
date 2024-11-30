import React from "react";
import Image from "next/image";

const BestSelling = () => {
  return (
    <section className="pt-24">
      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-heading font-arimo text-4xl mb-4">Top Sellers</h1>
        <p className="text-text text-lg">Browse our top selling products</p>
      </div>

      {/* Cards Container */}
      <div className="flex flex-wrap justify-center pt-8">
        {/* Card 1 */}
        <div className="flex flex-col items-center w-full  sm:w-1/2 md:w-1/3 lg:w-1/4">
          <Image
            src="/bestSeller/shirt1.png"
            width={295}
            height={342}
            alt="Shirt 1"
            className=""
          />
          <h2 className="text-heading font-baloo text-[16px] mt-4">
            Gray Polo Shirt
          </h2>
          <p className="text-primary text-center">$49.00</p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center w-full  sm:w-1/2 md:w-1/3 lg:w-1/4">
          <Image
            src="/bestSeller/shirt2.png"
            width={295}
            height={342}
            alt="Shirt 2"
            className=""
          />
          <h2 className="text-heading font-baloo text-[16px] mt-4">
            Red Shirt
          </h2>
          <p className="text-primary text-center">$69.00</p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center w-full  sm:w-1/2 md:w-1/3 lg:w-1/4">
          <Image
            src="/bestSeller/shirt3.png"
            width={295}
            height={342}
            alt="Shirt 3"
            className=""
          />
          <h2 className="text-heading font-baloo text-[16px] mt-4">
            Polo White Shirt
          </h2>
          <p className="text-primary text-center">$29.00</p>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center w-full  sm:w-1/2 md:w-1/3 lg:w-1/4">
          <Image
            src="/bestSeller/shirt4.png"
            width={295}
            height={342}
            alt="Shirt 4"
          />
          <h2 className="text-heading font-baloo text-[16px] mt-4">
            Pink Casual Shirt
          </h2>
          <p className="text-primary text-center">$39.00</p>
        </div>
      </div>
      <div className="justify-center items-center text-center pt-20 pb-10">
        <button className="px-8 py-3 bg-primary text-white text-center">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default BestSelling;
