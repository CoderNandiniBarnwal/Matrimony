import React from "react";

function ForgotPassword() {
  return (
    <div className="min-h-screen">

      <div className="w-[95%] sm:w-[90%] max-w-[1200px] flex flex-col md:flex-row min-h-[500px] mx-auto my-6 md:my-10 border border-gray-200 shadow-xl rounded-xl overflow-hidden">
        <div className="w-full md:w-[40%] p-4 sm:p-6 flex items-center justify-center">
          <div className="w-full h-[280px] sm:h-[350px] md:h-full overflow-hidden rounded-lg">
            <img
              src="couple.png"
              alt="Couple"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="w-full md:w-[60%] flex items-center justify-center p-5 sm:p-7 md:p-10">
          <div className="w-full max-w-[90%]">
            <div>
              <p className="text-[#8b0038] text-center md:text-left font-semibold text-xl">
                <span>~</span>Back To Login
              </p>
            </div>
            <div className="py-8 md:py-24">
              <h1 className="text-[#8b0038] text-2xl sm:text-3xl md:text-4xl font-serif text-center">
                Forgot Password ?
              </h1>
              <p className="text-gray-600 text-center my-2 w-[80%] mx-auto">
                No worries! Enter your registered email address & we will send
                you a link to reset your password
              </p>

              <div className="my-10">
                <label className="block text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="text"
                  placeholder="Enter your registered email"
                  className="w-full border border-gray-200 bg-transparent p-2 outline-2 focus:border-[#a87955]"
                />
              </div>
              <button className="bg-[#8b0038] text-white py-3 mt-4 w-full rounded-md text-lg transition">
                Send Verify Link
              </button>

              <p className="text-gray-500 mt-6 text-center">
                Remember your password ?{" "}
                <span className="font-medium text-[#8b0038]">Login</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
