import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div>
      <div className="flex justify-center login-item hero min-h-screen bg-base-200 py-5">
        <div className="hero-content border  flex-col lg:flex-row">
          <div className="card flex-shrink-0 w-full items-center max-w-sm border rounded-md border-black bg-base-100">
            <div>
              <div className="p-8 space-y-3 rounded-xl items-center   text-neutral">
                <h1 className="text-2xl font-bold text-center">Register</h1>
                <form
                  noValidate=""
                  action=""
                  className="space-y-6 ng-untouched ng-pristine ng-valid"
                >
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm"
                        required
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="input w-full px-3 py-2 border rounded-md input-bordered"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm">
                        Email address
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="email"
                        className="input w-full px-3 py-2 border rounded-md input-bordered"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <label htmlFor="password" className="text-sm">
                          Password
                        </label>
                      </div>
                      <input
                        type="password"
                        placeholder="password"
                        className="input w-full px-3 py-2 border rounded-md input-bordered"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="confirmPassword"
                        className="block mb-2 text-sm"
                      >
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        placeholder="confirm password"
                        className="input w-full px-3 py-2 border rounded-md input-bordered"
                      />
                    </div>

                    <div>
                      <label htmlFor="photo" className="block mb-2 text-sm">
                        Photo Link
                      </label>
                      <input
                        type="text"
                        placeholder="Photo URL"
                        className="input w-full px-3 py-2 border rounded-md input-bordered"
                      />
                    </div>
                  </div>

                  <small>
                    <p className="text-error -mt-2"></p>
                  </small>
                  <button
                    type="submit"
                    className="block w-full  px-5 py-3 mt-5 rounded-md bg-[#4d8577] hover:bg-[#41685e] text-white uppercase font-bold"
                  >
                    REGISTER NOW
                  </button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                  <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                  <p className="px-3 text-sm">Login with social accounts</p>
                  <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                </div>
                <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-center">
                  <button className="btn btn-circle btn-outline p-4 hover:bg-stone-800 border rounded-full border-black">
                    <FcGoogle></FcGoogle>
                  </button>
                </div>
                <p className="text-xs text-center sm:px-6">
                  Do not have an account? <br />
                  <Link
                    rel="noopener noreferrer"
                    to="/login"
                    className="underline hover:text-primary"
                  >
                    Login Now
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
