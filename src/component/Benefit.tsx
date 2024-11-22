import Image from "next/image";

const Benefit = () => {
  return (
    <section>
      {/* Benefit Container */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12 px-4">
        {/* Benefit 1 */}
        <div className="flex items-start gap-5">
          {/* Icon */}
          <Image
            src="/icons/icon1.png"
            alt="benefit 1"
            width={30}
            height={24}
          />
          {/* Text Section */}
          <div>
            <h2 className="text-heading font-baloo text-[16px] leading-[1.2]">
              FREE SHIPPING
            </h2>
            <p className="text-text text-[16px] font-lato leading-[1.5] pt-3">
              Enjoy free shipping on
              <br />
              all orders over $100
            </p>
          </div>
        </div>

        {/* Benefit 2 */}
        <div className="flex items-start gap-5">
          <Image
            src="/icons/icon2.png"
            alt="benefit 2"
            width={30}
            height={24}
          />
          <div>
            <h2 className="text-heading font-baloo text-[16px] leading-[1.2]">
              SUPPORT 24/7
            </h2>
            <p className="text-text text-[16px] font-lato leading-[1.5] pt-3">
              Our support team is there
              <br />
              to help with queries
            </p>
          </div>
        </div>

        {/* Benefit 3 */}
        <div className="flex items-start gap-5">
          <Image
            src="/icons/icon3.png"
            alt="benefit 3"
            width={30}
            height={24}
          />
          <div>
            <h2 className="text-heading font-baloo text-[16px] leading-[1.2]">
              30 DAYS RETURN
            </h2>
            <p className="text-text text-[16px] font-lato leading-[1.5] pt-3">
              Simply return it within 30
              <br />
              days for an exchange.
            </p>
          </div>
        </div>

        {/* Benefit 4 */}
        <div className="flex items-start gap-5">
          <Image
            src="/icons/icon4.png"
            alt="benefit 4"
            width={30}
            height={24}
          />
          <div>
            <h2 className="text-heading font-baloo text-[16px] leading-[1.2]">
              100% PAYMENT SECURE
            </h2>
            <p className="text-text text-[16px] font-lato leading-[1.5] pt-3">
              Our payments are secured
              <br />
              with 256-bit encryption.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefit;
