import Image from 'next/image'
import NewProducts from '@/component/NewProducts';
import Benefit from '@/component/Benefit';
import Promo from '@/component/Promo';
import BestSelling from '@/component/BestSelling';

export default function HeroSection() {
  return (
    <>
    <div className="relative w-full h-[400px] md:h-[600px]">
      {/* Background Image */}
      <Image
        src="/img_1.png" // Replace with your uploaded image path
        alt="Hero image"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />

      {/* Text and Button */}
      <div className=" absolute top-[200px] left-[760px] text-white text-center">
        <h1 className="font-bold text-[48px] leading-[1.2] md:text-6xl  mb-8">
          STYLIST PICKS BEAT <br/> THE HEAT
        </h1>
        <button className="px-6 py-2 text-sm md:text-base font-semibold border border-white hover:bg-white hover:text-black transition rounded-md">
          SHOP NOW
        </button>
      </div>
    </div>
    <NewProducts />
    <Benefit />
    <Promo />
    <BestSelling />
    </>
  );
}
