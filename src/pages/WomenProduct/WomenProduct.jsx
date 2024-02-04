import productImage from "../../assets/men_product/ce_blazer_ms_2d_6636_3263_1_tk_6502_vat_tk_6990_1_.jpg";
import { useState } from "react";

import "./WomenProduct.css";
const WomenProduct = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="grid lg:grid-cols-4 gap-10 py-10 lg:mx-20 mx-5  ">
      <div
        className={`image-container ${isHovered ? "hovered" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative w-full  overflow-hidden ">
          <img src={productImage} alt="Your Image" className="centered-image" />
          <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center font-bold text-sm text-white uppercase">
            blazer
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
          <img src={productImage} alt="Your Image" className="centered-image" />
          <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center font-bold text-sm text-white uppercase">
            T-Shirt
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
          <img src={productImage} alt="Your Image" className="centered-image" />
          <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center font-bold text-sm text-white uppercase">
            Shirt
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
          <img src={productImage} alt="Your Image" className="centered-image" />
          <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center font-bold text-sm text-white uppercase">
            Polo
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
          <img src={productImage} alt="Your Image" className="centered-image" />
          <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center font-bold text-sm text-white uppercase">
            blazer
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
          <img src={productImage} alt="Your Image" className="centered-image" />
          <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center font-bold text-sm text-white uppercase">
            T-Shirt
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
          <img src={productImage} alt="Your Image" className="centered-image" />
          <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center font-bold text-sm text-white uppercase">
            Shirt
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
          <img src={productImage} alt="Your Image" className="centered-image" />
          <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center font-bold text-sm text-white uppercase">
            Polo
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
  );
};

export default WomenProduct;
