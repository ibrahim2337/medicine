import { FaCarSide } from "react-icons/fa";
import { SlSupport } from "react-icons/sl";
import { FaExchangeAlt } from "react-icons/fa";
import { GrSecure } from "react-icons/gr";

const Support = () => {
  return (
    <div className="grid lg:grid-cols-4 gap-5 lg:mx-20 mx-5 py-20">
      <div className="flex items-center gap-5 ">
        <div className="border p-3 rounded-full">
          <FaCarSide />
        </div>
        <div>
          <h1 className="text-md font-semibold">FREE SHIPPING</h1>
          <h2 className="text-sm">BUY BDT 3000+ & GET FREE DELIVERY</h2>
        </div>
      </div>

      <div className="flex items-center gap-5 ">
        <div className="border p-3 rounded-full">
          <SlSupport />
        </div>
        <div>
          <h1 className="text-md font-semibold">SUPPORT</h1>
          <h2 className="text-sm">
            WHATSAPP: +880 1732287393 CALL: +880 1799000444
          </h2>
        </div>
      </div>

      <div className="flex items-center gap-5 ">
        <div className="border p-3 rounded-full">
        <FaExchangeAlt />
        </div>
        <div>
          <h1 className="text-md font-semibold">7 DAYS EXCHANGE</h1>
          <h2 className="text-sm">
            EXCHANGE WITHIN 7 DAYS WITH SIMILAR TYPE OF PRODUCTS
          </h2>
        </div>
      </div>

      <div className="flex items-center gap-5 ">
        <div className="border p-3 rounded-full">
        <GrSecure />
        </div>
        <div>
          <h1 className="text-md font-semibold">100% PAYMENT SECURE</h1>
          <h2 className="text-sm">CASH ON DELIVERY AND SECURED ONLINE PAYMENT</h2>
        </div>
      </div>
    </div>
  );
};

export default Support;
