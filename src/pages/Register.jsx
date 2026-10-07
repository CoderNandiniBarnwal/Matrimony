import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [religion, setReligion] = useState("");

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
              Create Your Account
            </h1>

            <p className="text-center text-gray-500 mb-6 sm:mb-8">
              Find your perfect life partner
            </p>

            <div className="flex flex-col md:flex-row gap-0 md:gap-6">
              {/* Name */}
              <div className="mb-5 w-full md:w-[50%]">
                <label className="block text-gray-700 mb-1">Full Name</label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full border-2 border-gray-300 bg-transparent p-2 outline-none focus:border-[#a87955]"
                />
              </div>

              {/* Gender */}
              <div className="mb-6 w-full md:w-[50%]">
                <label className="block text-gray-700 mb-1">Gender</label>

                <select className="w-full border-2 border-gray-300 bg-transparent p-2 outline-none focus:border-[#a87955]">
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-0 md:gap-6">
              <div className="mb-5 w-full md:w-[50%]">
                <label className="block text-gray-700 mb-1">
                  Date Of Birth
                </label>

                <input
                  type="date"
                  placeholder="Enter your DOB"
                  className="w-full border-2 border-gray-300 bg-transparent p-2 outline-none focus:border-[#a87955]"
                />
              </div>
              {/* Email */}
              <div className="mb-5 w-full md:w-[50%]">
                <label className="block text-gray-700 mb-1">Email</label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border-2 border-gray-300 bg-transparent p-2 outline-none focus:border-[#a87955]"
                />
              </div>
            </div>

            <div className="mb-5">
              <label className="block text-gray-700 mb-1">Mobile</label>

              <input
                type="text"
                placeholder="Enter your mobile number"
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

            {/* <div className="mb-5">
              <label className="block text-gray-700 mb-1">
                I am looking for
              </label>

              <select className="w-full border-2 border-gray-300 bg-transparent p-2 outline-none focus:border-[#a87955]">
                <option value="">Select</option>
                <option value="bride">Bride</option>
                <option value="groom">Groom</option>
              </select>
            </div> */}

            <div className="flex flex-col md:flex-row gap-0 md:gap-6">
              {/* <div className="mb-5 w-full md:w-[50%]">
                <label className="block text-gray-700 mb-1">
                  Marital Status
                </label>

                <select className="w-full border-2 border-gray-300 bg-transparent p-2 outline-none focus:border-[#a87955]">
                  <option value="">Select</option>
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                  <option value="widow">Widow</option>
                  <option value="divorce">Divorce</option>
                </select>
              </div> */}

              <div className="mb-5 w-full md:w-[50%]">
                <label className="block text-gray-700 mb-1">Religion</label>

                <select
                  className="w-full border-2 border-gray-300 bg-transparent p-2 outline-none focus:border-[#a87955]"
                  value={religion}
                  onChange={(e) => setReligion(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="hindu">Hindu</option>
                  <option value="muslim">Muslim</option>
                  <option value="christian">Christian</option>
                  <option value="sikh">Sikh</option>
                </select>
              </div>

              <div className="mb-5 w-full md:w-[50%]">
                <label className="block text-gray-700 mb-1">Caste</label>

                <select
                  className="w-full border-2 border-gray-300 bg-transparent p-2 outline-none focus:border-[#a87955]"
                  disabled={!religion}
                >
                  {!religion ? (
                    <option value="">Please choose religion first</option>
                  ) : (
                    <>
                      <option value="">Select</option>

                      {religion === "hindu" && (
                        <>
                          <option value="brahmin">Brahmin</option>
                          <option value="rajput">Rajput</option>
                          <option value="kayastha">Kayastha</option>
                          <option value="yadav">Yadav</option>
                          <option value="jat">Jat</option>
                        </>
                      )}
                      {religion === "muslim" && (
                        <>
                          <option value="sheikh">Sheikh</option>
                          <option value="sayyid">Sayyid</option>
                          <option value="pathan">Pathan</option>
                          <option value="ansari">Ansari</option>
                          <option value="qureshi">Qureshi</option>
                        </>
                      )}

                      {religion === "christian" && (
                        <>
                          <option value="catholic">Catholic</option>
                          <option value="protestant">Protestant</option>
                          <option value="orthodox">Orthodox</option>
                          <option value="anglican">Anglican</option>
                          <option value="baptist">Baptist</option>
                        </>
                      )}

                      {religion === "sikh" && (
                        <>
                          <option value="jat_sikh">Jat Sikh</option>
                          <option value="khatri">Khatri</option>
                          <option value="arora">Arora</option>
                          <option value="ramgarhia">Ramgarhia</option>
                          <option value="mazhabi_sikh">Mazhabi Sikh</option>
                        </>
                      )}
                    </>
                  )}
                </select>
              </div>
            </div>

            <input type="checkbox" className="mr-2" />
            <span>I agree to the </span>
            <span className="text-[#8b0038]">Terms & Conditions </span>
            <span> and </span>
            <span className="text-[#8b0038]">Privacy Policy</span>

            {/* Register Button */}
            <Link to ="/basicinformation">
            <button className="w-full bg-[#8b0038] text-white py-3 mt-4 rounded-md text-lg transition">
              Register
            </button></Link>

            {/* Login */}
            <p className="text-center text-gray-500 mt-6">
              Already have an account?{" "}
              <Link to="/login">
                <span className="text-[#8b0038] cursor-pointer font-medium">
                  Login
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
