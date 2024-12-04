import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="text-text body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-heading tracking-widest text-sm mb-3">
              COMPANY INFO
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link href={'/About'} className="text-text hover:text-gray-800">About Us</Link>
              </li>
              <li>
                <Link href={'/'} className="text-text hover:text-gray-800">Latest Posts</Link>
              </li>
              <li>
                <Link href={'/Contact'} className="text-text hover:text-gray-800">Contact Us</Link>
              </li>
              <li>
                <Link href={'/'} className="text-text hover:text-gray-800">Shop</Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-heading tracking-widest text-sm mb-3">
              HELP LINKS
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link href={'/'} className="text-text hover:text-gray-800">Tracking</Link>
              </li>
              <li>
                <Link href={'/'} className="text-text hover:text-gray-800">Order Status</Link>
              </li>
              <li>
                <Link href={'/'} className="text-text hover:text-gray-800">Delivery</Link>
              </li>
              <li>
                <Link href={'/'} className="text-text hover:text-gray-800">Shipping Info</Link>
              </li>
              <li>
                <Link href={'/'} className="text-text hover:text-gray-800">FAQ</Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-heading tracking-widest text-sm mb-3">
              USEFUL LINKS
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link href={'/'} className="text-text hover:text-gray-800">Special Offer</Link>
              </li>
              <li>
                <Link href={'/'} className="text-text hover:text-gray-800">Gift Cards</Link>
              </li>
              <li>
                <Link href={'/'} className="text-text hover:text-gray-800">Advertising</Link>
              </li>
              <li>
                <Link href={'/'} className="text-text hover:text-gray-800">Terms of Use</Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-heading tracking-widest text-[12px] mb-3">
              GET IN THE KNOW
            </h2>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Enter email"
                className="border-b-2 border-text focus:outline-none w-full text-sm"
              />
              <button className="ml-2 text-heading hover:text-gray-700 text-lg">
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#ffffff]">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <p className="text-[16px] text-text sm:ml-6 sm:mt-0 mt-4">
            © 2024 NorthStar eCommerce
          </p>
          <p className="text-sm text-text sm:ml-6 sm:mt-0 mt-4">
            Privacy Policy Terms & Condition
          </p>
          <div className="flex sm:ml-auto sm:mt-0 mt-4 space-x-3">
            {/* Credit Card Icons */}
            <Link href={'#'} className="text-text hover:text-gray-800" >
              <Image
                src="/icons/icon5.png"
                alt="VISA"
                width={'56'}
                height={'34'}
              />
            </Link>
            <Link href={'#'} className="text-text hover:text-gray-800">
              <Image
                src="/icons/icon6.png"
                alt="MasterCard"
               width={'56'}
               height={'34'}
              />
            </Link>
            <Link href={'#'} className="text-text hover:text-gray-800">
              <Image
                src="/icons/icon7.png"
                alt="PayPal"
                width={'56'}
                height={'34'}
              />
            </Link>
            <Link href={'#'} className="text-text hover:text-gray-800">
              <Image
                src="/icons/icon8.png"
                alt="VISA Electron"
                width={'56'}
                height={'34'}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
