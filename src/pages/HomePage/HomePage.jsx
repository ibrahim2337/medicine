import Blog from "../../component/Blog/Blog";
import Category from "../../component/Category/Category";
import Introduction from "../../component/Introduction/Introduction";
import Latest from "../../component/Latest/Latest";


const HomePage = () => {
    return (
        <div className="">
            <Introduction></Introduction>
            <Blog></Blog>
            <Latest></Latest>
            <Category ></Category>
            
        </div>
    );
};

export default HomePage;