import productImage from "../../assets/men_product/ce_blazer_ms_2d_6636_3263_1_tk_6502_vat_tk_6990_1_.jpg";


const MenProduct = () => {
  return (
    <div className="grid lg:grid-cols-4 gap-10 py-10 lg:mx-20 mx-5  ">
     
      <div>
      <div className="image-container">
      <img src={productImage} alt="Your Image" className="centered-image" />
      <button className="centered-button text-lg uppercase bg-white ">Blazer</button>
    </div>
      </div>
    </div>
  );
};

export default MenProduct;
