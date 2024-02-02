import SideImage from "../../assets/SingleProduct/638a77dcdd7bb-square.jpg"
import maskImage from "../../assets/SingleProduct/5eb191ac13910.jpg"
const MaskFeature = () => {
    return (
        <div className="grid grid-cols-3 gap-5 pb-10 px-5 lg:px-20">
            <div className="">
                <img src={SideImage} alt="" />
            </div>
            <div className="grid grid-cols-2 gap-5">
            <img src={maskImage} alt="" />
            <img src={maskImage} alt="" />
            <img src={maskImage} alt="" />
            <img src={maskImage} alt="" />
            </div>
            <div className="grid grid-cols-2 gap-5">
            <img src={maskImage} alt="" />
            <img src={maskImage} alt="" />
            <img src={maskImage} alt="" />
            <img src={maskImage} alt="" />
            </div>
            
        </div>
    );
};

export default MaskFeature;