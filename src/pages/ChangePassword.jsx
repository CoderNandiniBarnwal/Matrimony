import React from "react";

function ChangePassword() {
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
            <div className="py-4 md:py-12">
              <h1 className="text-[#8b0038] text-2xl sm:text-3xl md:text-4xl font-serif text-center">
                Change Password ?
              </h1>
              <p className="text-gray-600 text-center my-2 w-[80%] mx-auto">
                Keep your account secure with a new password
              </p>

              <div className="mt-10">
                <label className="block text-gray-700 mb-2">
                  Current Password
                </label>
                <input
                  type="text"
                  placeholder="Enter your current password"
                  className="w-full border border-gray-200 bg-transparent p-2 outline-2 focus:border-[#a87955]"
                />
              </div>

              <div className="mt-6">
                <label className="block text-gray-700 mb-2">
                  New Password
                </label>
                <input
                  type="text"
                  placeholder="Enter your new password"
                  className="w-full border border-gray-200 bg-transparent p-2 outline-2 focus:border-[#a87955]"
                />
              </div>
              <p>Password must be between 2-12 characters</p>

              <div className="mt-6">
                <label className="block text-gray-700 mb-2">
                  Confirm Password
                </label>
                <input
                  type="text"
                  placeholder="Re-enter your new password"
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

export default ChangePassword;
