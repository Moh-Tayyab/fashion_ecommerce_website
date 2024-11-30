import React from 'react'
import Image from 'next/image'
import NewProducts from '@/component/NewProducts'
import Testimonials from '@/component/Testimonials'

const page = () => {
  return (
    <>
    <div className="relative">
  <Image
    src="/about/about1.png"
    alt="About"
    layout="responsive"
    width={1366}
    height={348}
  />
  <h1 className="absolute justify-start text-start bottom-16 px-14 p text-white text-4xl items-start gap-3">
    ABOUT NORTHSTAR
  </h1>
</div>


    {/*feature img */}
    <div className='flex sm:flex-row justify-center items-center m-8 gap-5'>
    <div className='justify-center items-center '>
      <Image
       src="/about/feature_1.png"
       alt="About"
       width={600} 
       height={600}
       />
    </div>
    <div>
      <Image
      src="/about/feature_2.png"
      alt="About"
      width={600}
      height={600}
      />
    </div>
    </div>
    <NewProducts />
    <Testimonials />
    </>
  
  )
}

export default page
