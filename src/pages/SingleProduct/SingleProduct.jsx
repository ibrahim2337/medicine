import SingleProductImage from "../../assets/SingleProduct/651a617470cb2-square.jpg";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";

const SingleProduct = () => {
  return (
    <div className="my-8">
      <div className="grid lg:grid-cols-2 lg:mx-32 mx-5 gap-10">
        <div>
          <img src={SingleProductImage} alt="" />
        </div>
        <div>
          <div>
            <h1 className="font-bold text-2xl">
              Mens Premium Sports Active Wear T-shirt - Inferno
            </h1>
            <div className="flex  items-center  gap-2 py-2">
              <FaBangladeshiTakaSign />
              <h2 className="text-xl font-bold">570</h2>
            </div>
          </div>

          <div>
            <h1>Select Size:</h1>
            <div className="pt-2 flex gap-5">
              <button className="text-center py-0.5 px-5 border border-black  hover:drop-shadow-xl hover:scale-105 hover:border-slate-500 ">
                M
              </button>
              <button className="text-center py-0.5 px-5 border border-black  hover:drop-shadow-xl hover:scale-105 hover:border-slate-500 ">
                L
              </button>
              <button className="text-center py-0.5 px-5 border border-black  hover:drop-shadow-xl hover:scale-105 hover:border-slate-500 ">
                XL
              </button>
            </div>
          </div>

          <div className="pt-5 flex gap-6">
            <div className="flex items-center border border-black px-4">
              <FaMinus />
              <h1 className="text-xl px-5">1</h1>
              <FaPlus />
            </div>
            <div className="bg-gray-800 hover:bg-black flex items-center">
              <button className="text-white py-0.5 lg:px-5 px-5 text-lg">
                Add To Card
              </button>
            </div>
          </div>

          <div className="pt-4">
            <h1 className="text-justify">
              SmileZ Premium Quality Sports t-shirts are smooth and comfortable.
              The t-shirts are made with the finest quality polyester fabric,
              perfect for casual or sports wear.
            </h1>
            <h2 className="text-md font-bold pt-2">Detailed Specification:</h2>
            <ul className="ps-10">
              <div className="flex gap-2 items-center pt-2">
                <GoDotFill />
                <li className="">Finest quality Polyester</li>
              </div>
              <div className="flex gap-2 items-center">
                <GoDotFill />
                <li className="">Regular fit, Crew Neck Mid-weight, 145gsm.</li>
              </div>
              <div className="flex gap-2 items-center">
                <GoDotFill />
                <li className="">Sharp and long-lasting sublimation print</li>
              </div>
              <div className="flex gap-2 items-center">
                <GoDotFill />
                <li className="">Preshrunk to minimize shrinkage</li>
              </div>
            </ul>

            <h2 className="text-md font-bold pt-2">
              Size chart - In inches (Expected Deviation 3%)
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
