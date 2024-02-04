
import ProductCard from "../ProductCard/ProductCard";

const Category = () => {
  return (
    <div className="bg-[#0a0a0a]">
      <div>
        <h1 className="pt-14 pb-2 text-center text-white font-bold text-4xl">
          Specialized Products
        </h1>
        <div
        style={{ flex: 1, height: "4px", backgroundColor: "rgb(153, 0,0)" }}
        className=" lg:mx-[500px] mx-12"
      ></div>
      </div>

     <ProductCard></ProductCard>
    </div>
  );
};

export default Category;
