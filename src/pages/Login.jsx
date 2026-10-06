import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="min-h-screen bg-[#fffaf5]">
      <div className="flex flex-col md:flex-row w-[95%] sm:w-[90%] max-w-[1200px] min-h-[500px] mx-auto my-6 md:my-10 border border-gray-200 shadow-lg rounded-xl overflow-hidden">
        {/* Left Image */}
        <div className="w-full md:w-[40%] p-4 sm:p-6 flex items-center justify-center">
          <div className="w-full h-[280px] sm:h-[350px] md:h-full overflow-hidden rounded-lg">
            <img
              src="couple.png"
              alt="Wedding couple"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Register Form */}
        <div className="w-full md:w-[60%] flex items-center justify-center p-5 sm:p-7 md:p-10">
          <div className="w-full max-w-[90%]">
            <h1 className="text-3xl sm:text-4xl font-serif text-center text-[#8b0038] mb-2">
              Welcome Back
            </h1>

            <p className="text-center text-gray-500 mb-6 sm:mb-8">
              Login here to get your perfect life partner
            </p>

            <div className="mb-5">
              <label className="block text-gray-700 mb-1">Email</label>

              <input
                type="text"
                placeholder="Enter your email"
                className="w-full border-2 border-gray-300 bg-transparent p-2 outline-none focus:border-[#a87955]"
              />
            </div>

            {/* Password */}
            <div className="mb-5">
              <label className="block text-gray-700 mb-1">Password</label>

              <input
                type="password"
                placeholder="Create a password"
                className="w-full border-2 border-gray-300 bg-transparent p-2 outline-none focus:border-[#a87955]"
              />
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div className="flex items-center justify-center md:justify-start">
                <input type="checkbox" className="mr-2" />
                <span>Remember me </span>
              </div>

              <p className="text-center md:text-right font-bold text-[#8b0038] cursor-pointer">
                Forget Password
              </p>
            </div>

            {/* Register Button */}
            <button className="w-full bg-[#8b0038] text-white py-3 mt-4 rounded-md text-lg transition">
              Login
            </button>

            <p className="text-center text-gray-500 mt-6">
              Don't have an account?{" "}
              <Link to="/register">
              <span className="text-[#8b0038] cursor-pointer font-medium">
                Register
              </span></Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
