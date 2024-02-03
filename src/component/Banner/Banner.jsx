import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import image from "../../assets/Banner/646fda60251a3.jpg";

import { BiArrowBack } from "react-icons/bi";

const Banner = () => {
  return (
    <div className="">
      <div className="relative text-white text-[20px] w-full mx-auto">
        <Carousel
          emulateTouch={true}
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          renderArrowPrev={(clickHandler, hasPrev) => (
            <div
              onClick={clickHandler}
              className="absolute right-[31px] md:right-[51px] bottom-4 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
            >
              <BiArrowBack className="text-sm md:text-lg" />
            </div>
          )}
          renderArrowNext={(clickHandler, hasNext) => (
            <div
              onClick={clickHandler}
              className="absolute right-0 bottom-4 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
            >
              <BiArrowBack className="rotate-180 text-sm md:text-lg" />
            </div>
          )}
        >
          <div>
            <img
              height={1800}
              width={2800}
              alt=""
              src={image}
              className="aspect-[16/10] md:aspect-auto object-cover"
            />
          </div>

          <div>
            <img
              height={1800}
              width={2800}
              alt=""
              src={image}
              className="aspect-[16/10] md:aspect-auto object-cover"
            />
          </div>

          <div>
            <img
              height={1800}
              width={2800}
              alt=""
              src={image}
              className="aspect-[16/10] md:aspect-auto object-cover"
            />
          </div>
          <div>
            <img
              height={1800}
              width={2800}
              alt=""
              src={image}
              className="aspect-[16/10] md:aspect-auto object-cover"
            />
          </div>
          <div>
            <img
              height={1800}
              width={2800}
              alt=""
              src={image}
              className="aspect-[16/10] md:aspect-auto object-cover"
            />
          </div>
          <div>
            <img
              height={1800}
              width={2800}
              alt=""
              src={image}
              className="aspect-[16/10] md:aspect-auto object-cover"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
