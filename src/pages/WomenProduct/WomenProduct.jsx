import productImage from "../../assets/men_product/ce_blazer_ms_2d_6636_3263_1_tk_6502_vat_tk_6990_1_.jpg";
import { useState } from 'react';

import "./WomenProduct.css"
const WomenProduct = () => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className="grid lg:grid-cols-4 gap-10 py-10 lg:mx-20 mx-5 ">
           <div
      className={`image-container ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={productImage} alt="Your Image" className="centered-image" />
      {isHovered && (
        <button className="centered-button" onClick={() => console.log('Button clicked')}>
          Click Me
        </button>
      )}
    </div>
        </div>
    );
};

export default WomenProduct;