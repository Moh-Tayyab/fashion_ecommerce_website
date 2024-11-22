import React from "react";

const Promo = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center gap-4 py-12 px-4 lg:px-0">
      {/* Rectangle Promo */}
      <div className="bg-heading w-full lg:w-[715px] h-[429px] flex flex-col justify-center items-center text-center py-12 px-6 lg:py-[112px] lg:px-[192px]">
        <h1 className="text-[24px] lg:text-[32px] text-[#ffffff]">PEACE OF MIND</h1>
        <p className="text-[16px] lg:text-[18px] text-[#ffffff] py-6">
          A one-stop platform for all your fashion needs, <br className="hidden lg:block" />
          hassle-free. Buy with peace of mind.
        </p>
        <button className="px-8 py-3 bg-[#ffffff] text-primary rounded-md font-medium hover:bg-gray-200">
          BUY NOW
        </button>
      </div>

      {/* Square Promo */}
      <div className="bg-heading w-full lg:w-[505px] h-[429px] flex flex-col justify-center items-center text-center py-12 px-6 lg:py-[144px] lg:px-[72px]">
        <h1 className="text-[24px] lg:text-[32px] text-[#ffffff]">BUY 2 GET 1 FREE</h1>
        <p className="text-[16px] lg:text-[18px] text-[#ffffff] py-6">
          End of season sale. Buy any 2 items of your choice <br className="hidden lg:block" />
          and get 1 free.
        </p>
        <button className="px-8 py-3 bg-[#ffffff] text-primary rounded-md font-medium hover:bg-gray-200">
          BUY NOW
        </button>
      </div>
    </div>
  );
};

export default Promo;
