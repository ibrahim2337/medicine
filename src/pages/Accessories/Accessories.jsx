import beltImage from "../../assets/accessories/belt/ce_belt_4ato_1102600_tk_1293_vat_1390_1_.jpg";
import necklaceImage from "../../assets/accessories/necklace/ce_necklace_27cn33700_tk_1323_vat-_copy.jpg";
import socksImage from "../../assets/accessories/socks/ce_socks_10_6_lf_100_tk_186_vat_tk-200_11_.jpg";
import walletImage from "../../assets/accessories/wallet/ce_wallet_5_2a_c650_tk_1300_vat_2_.jpg";
import { useState } from "react";
import "./Accessories.css";

const Accessories = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div>
      <div className="grid lg:grid-cols-4 gap-10 py-10 lg:mx-20 mx-5  ">
        <div
          className={`image-container ${isHovered ? "hovered" : ""}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative w-full  overflow-hidden ">
            <img src={beltImage} alt="Your Image" className="centered-image h-40" />
            <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center font-bold text-sm text-white uppercase">
             belt
            </span>
            {isHovered && (
              <button
                className="centered-button w-32 h-10 font-bold text-xl bg-white text-black"
                onClick={() => console.log("Button clicked")}
              >
                Click Me
              </button>
            )}
          </div>
        </div>

        <div
          className={`image-container ${isHovered ? "hovered" : ""}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative w-full  overflow-hidden ">
            <img
              src={necklaceImage}
              alt="Your Image"
              className="centered-image"
            />
            <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center font-bold text-sm text-white uppercase">
            necklace
            </span>
            {isHovered && (
              <button
                className="centered-button w-32 h-10 font-bold text-xl bg-white text-black"
                onClick={() => console.log("Button clicked")}
              >
                Click Me
              </button>
            )}
          </div>
        </div>

        <div
          className={`image-container ${isHovered ? "hovered" : ""}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative w-full  overflow-hidden ">
            <img src={socksImage} alt="Your Image" className="centered-image" />
            <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center font-bold text-sm text-white uppercase">
              socks
            </span>
            {isHovered && (
              <button
                className="centered-button w-32 h-10 font-bold text-xl bg-white text-black"
                onClick={() => console.log("Button clicked")}
              >
                Click Me
              </button>
            )}
          </div>
        </div>

        <div
          className={`image-container ${isHovered ? "hovered" : ""}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative w-full  overflow-hidden ">
            <img
              src={walletImage}
              alt="Your Image"
              className="centered-image"
            />
            <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center font-bold text-sm text-white uppercase">
              wallet
            </span>
            {isHovered && (
              <button
                className="centered-button w-32 h-10 font-bold text-xl bg-white text-black"
                onClick={() => console.log("Button clicked")}
              >
                Click Me
              </button>
            )}
          </div>
        </div>

        <div
          className={`image-container ${isHovered ? "hovered" : ""}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative w-full  overflow-hidden ">
            <img src={beltImage} alt="Your Image" className="centered-image h-40" />
            <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center font-bold text-sm text-white uppercase">
             belt
            </span>
            {isHovered && (
              <button
                className="centered-button w-32 h-10 font-bold text-xl bg-white text-black"
                onClick={() => console.log("Button clicked")}
              >
                Click Me
              </button>
            )}
          </div>
        </div>

        <div
          className={`image-container ${isHovered ? "hovered" : ""}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative w-full  overflow-hidden ">
            <img
              src={necklaceImage}
              alt="Your Image"
              className="centered-image"
            />
            <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center font-bold text-sm text-white uppercase">
            necklace
            </span>
            {isHovered && (
              <button
                className="centered-button w-32 h-10 font-bold text-xl bg-white text-black"
                onClick={() => console.log("Button clicked")}
              >
                Click Me
              </button>
            )}
          </div>
        </div>

        <div
          className={`image-container ${isHovered ? "hovered" : ""}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative w-full  overflow-hidden ">
            <img src={socksImage} alt="Your Image" className="centered-image" />
            <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center font-bold text-sm text-white uppercase">
              socks
            </span>
            {isHovered && (
              <button
                className="centered-button w-32 h-10 font-bold text-xl bg-white text-black"
                onClick={() => console.log("Button clicked")}
              >
                Click Me
              </button>
            )}
          </div>
        </div>

        <div
          className={`image-container ${isHovered ? "hovered" : ""}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative w-full  overflow-hidden ">
            <img
              src={walletImage}
              alt="Your Image"
              className="centered-image"
            />
            <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center font-bold text-sm text-white uppercase">
              wallet
            </span>
            {isHovered && (
              <button
                className="centered-button w-32 h-10 font-bold text-xl bg-white text-black"
                onClick={() => console.log("Button clicked")}
              >
                Click Me
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accessories;
