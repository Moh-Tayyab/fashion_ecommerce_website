import React from "react";
import Image from "next/image";

const Testimonials = () => {
  return (
    <section className="text-text body-font">
      <h1 className="text-3xl font-bold title-font text-gray-900 mb-12 text-center mt-20">
        Testimonials
      </h1>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <Image
            src="/about/test_1.png"
            alt="Testimonials"
            width={150}
            height={210}
          />
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0 px-8">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="block w-5 h-5 text-gray-900 mb-4"
                viewBox="0 0 975.036 975.036">
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
              </svg>
            </h2>
            <p className="leading-relaxed text-xl font-baloo ">
              Once we ordered some accessories items and we got the 
              products delivered in our doorstep, the customer support 
              was super helpful and they answered all my queries.
            </p>
            <p className="text-heading text-xl mt-5 font-arimo">Stacy</p>
          </div>
        </div>
        {/* testimonials 2 */}
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col pt-20 ">
          <Image
            src="/about/test_2.png"
            alt="Testimonials"
            width={150}
            height={210}
          />
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0 px-8">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="block w-5 h-5 text-gray-900 mb-4"
                viewBox="0 0 975.036 975.036">
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
              </svg>
            </h2>
            <p className="leading-relaxed text-xl font-baloo ">
            I ordered 5 shirts from them and received them in no time. The customer support was awesome!
            </p>
            <p className="text-heading text-xl mt-5 font-arimo">Tiffany</p>
          </div>
        </div>

        {/* testimonials 3 */}
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col pt-20">
          <Image
            src="/about/test_3.png"
            alt="Testimonials"
            width={150}
            height={210}
          />
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0 px-8">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="block w-5 h-5 text-gray-900 mb-4"
                viewBox="0 0 975.036 975.036">
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
              </svg>
            </h2>
            <p className="leading-relaxed text-xl font-baloo ">
            I got a wrong shirt so I contacted them and they happily offered me a refund. I will surely shop from them again.
            </p>
            <p className="text-heading text-xl mt-5 font-arimo">James</p>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default Testimonials;
