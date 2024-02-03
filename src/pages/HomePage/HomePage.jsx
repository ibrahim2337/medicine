import Banner from "../../component/Banner/Banner";
import Blog from "../../component/Blog/Blog";
import Category from "../../component/Category/Category";
import Introduction from "../../component/Introduction/Introduction";
import Latest from "../../component/Latest/Latest";
import MaskFeature from "../../component/MaskFeature/MaskFeature";



const HomePage = () => {
    return (
        <div className="">
            <Banner ></Banner>
            <Introduction></Introduction>
            <Blog></Blog>
            <Latest></Latest>
            <MaskFeature></MaskFeature>
            <Category ></Category>
            
            
        </div>
    );
};

export default HomePage;