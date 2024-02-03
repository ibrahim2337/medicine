import image1 from "../../assets/Latest_Procucts/638741f4b7222-square.jpg";
import image2 from "../../assets/Latest_Procucts/61a794e19552a-square.jpg";
import image3 from "../../assets/Latest_Procucts/61a794e19d4b4-square.jpg";
import image4 from "../../assets/Latest_Procucts/61a794e1a15bc-square.jpg";
import image5 from "../../assets/Latest_Procucts/61a794e1a5fec-square.jpg";
import image6 from "../../assets/Latest_Procucts/638741f4ba04f-square.jpg";
import image7 from "../../assets/Latest_Procucts/638741f4d360c-square.jpg";
import image8 from "../../assets/Latest_Procucts/638741f4d7304-square.jpg";
import image9 from "../../assets/Latest_Procucts/6388945749713-square.jpg";
import image10 from "../../assets/Latest_Procucts/63889c77196df-square.jpg";

import "./Latest.css"

const Latest = () => {
  return (
    <div className="">
      <div>
        <h1 className="pt-14 pb-2 text-center font-bold text-4xl">
          Latest Products
        </h1>
        <div
          style={{ flex: 1, height: "4px", backgroundColor: "rgb(153, 0,0)" }}
          className=" lg:mx-[540px] mx-12"
        ></div>
      </div>
      
      <div className="grid lg:grid-cols-5 gap-5 pt-20 lg:mx-20 mx-5 py-10 ">
        <div className=" relative w-full  overflow-hidden rounded-lg bg-white shadow-md">
          <img src={image1} alt="" />
          <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center font-bold text-sm text-white">
            NEW
          </span>
        </div>

        <div className=" relative w-full  overflow-hidden rounded-lg bg-white shadow-md">
          <img src={image2} alt="" />
          <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center font-bold text-sm text-white">
            NEW
          </span>
        </div>

        <div className=" relative w-full  overflow-hidden rounded-lg bg-white shadow-md">
          <img src={image3} alt="" />
          <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center font-bold text-sm text-white">
            NEW
          </span>
        </div>

        <div className=" relative w-full  overflow-hidden rounded-lg bg-white shadow-md">
          <img src={image4} alt="" />
          <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center font-bold text-sm text-white">
            NEW
          </span>
        </div>

        <div className=" relative w-full  overflow-hidden rounded-lg bg-white shadow-md">
          <img src={image5} alt="" />
          <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center font-bold text-sm text-white">
            NEW
          </span>
        </div>

        <div className=" relative w-full  overflow-hidden rounded-lg bg-white shadow-md">
          <img src={image6} alt="" />
          <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center font-bold text-sm text-white">
            NEW
          </span>
        </div>

        <div className=" relative w-full  overflow-hidden rounded-lg bg-white shadow-md">
          <img src={image7} alt="" />
          <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center font-bold text-sm text-white">
            NEW
          </span>
        </div>

        <div className=" relative w-full  overflow-hidden rounded-lg bg-white shadow-md">
          <img src={image8} alt="" />
          <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center font-bold text-sm text-white">
            NEW
          </span>
        </div>

        <div className=" relative w-full  overflow-hidden rounded-lg bg-white shadow-md">
          <img src={image9} alt="" />
          <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center font-bold text-sm text-white">
            NEW
          </span>
        </div>

        <div className=" relative w-full  overflow-hidden rounded-lg bg-white shadow-md">
          <img src={image10} alt="" />
          <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center font-bold text-sm text-white">
            NEW
          </span>
        </div>

      </div>
    </div>
  );
};

export default Latest;
