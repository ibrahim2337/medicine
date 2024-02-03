import Banner from "../../component/Banner/Banner";

import Category from "../../component/Category/Category";

import Latest from "../../component/Latest/Latest";
import MaskFeature from "../../component/MaskFeature/MaskFeature";
import Support from "../../component/Support/Support";

const HomePage = () => {
  return (
    <div className="">
      <Banner></Banner>
      <Latest></Latest>
      {/* <Introduction></Introduction>
      <Blog></Blog> */}
      <MaskFeature></MaskFeature>
      <Category></Category>
      <Support></Support>
    </div>
  );
};

export default HomePage;
