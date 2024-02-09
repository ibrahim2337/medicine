/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import errorImage from "../../assets/error/fashion-show-model-model-removebg-preview.png";

const ErrorPage = () => {
  return (
    <div className="grid lg:grid-cols-2 lg:mx-20 px-5 py-16 justify-center items-center">
      <div>
        <img src={errorImage} alt="" />
      </div>
      <div>
        <div className="flex items-center h-full ">
          <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
            <div className="max-w-md text-center">
              <h2 className="mb-8 font-extrabold text-9xl ">
                <span className="sr-only">Error</span>404
              </h2>
              <p className="text-2xl font-semibold md:text-3xl">
                Sorry, we couldn't find this page.
              </p>
              <p className="mt-4 mb-8 ">
                But don't worry, you can find plenty of other things on our
                homepage.
              </p>
              <Link
                rel="noopener noreferrer"
                to="/"
                className="px-8 py-3 font-semibold rounded-md text-white bg-gradient-to-r from-gray-600 to-gray-400"
              >
                Back to homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
