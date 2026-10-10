import React from "react";
import { useNavigate } from "react-router-dom";
import { FaAddressCard, FaHandshake } from "react-icons/fa6";

function RegistrationSuccess() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#fffaf5] flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-[1200px] mx-auto">

        <div className="flex flex-col md:flex-row gap-6">

          {/* Left Box: Registration Success */}
          <div className="w-full md:w-1/2 border border-gray-200 rounded-xl shadow-lg bg-white p-6 sm:p-8 md:p-10 flex flex-col items-center text-center">

            <div className="w-20 h-20 rounded-full bg-[#8b0038]/10 flex items-center justify-center mb-6">
              <FaAddressCard className="text-4xl text-[#8b0038]" />
            </div>

            <h1 className="text-2xl sm:text-3xl font-serif text-[#8b0038] mb-4">
              You are Registered Successfully!
            </h1>

            <p className="text-gray-600 leading-7 mb-8 max-w-md">
              Congratulations! You are registered now. We have
              sent you a verification email. Please verify your
              account to continue.
            </p>

            <button
              type="button"
              onClick={() => navigate("/membership")}
              className="mt-auto w-full sm:w-auto bg-[#8b0038] text-white px-6 py-3 rounded-md hover:bg-[#70002d] transition duration-300"
            >
              Select Membership Plan
            </button>
          </div>

          {/* Right Box: Partner Preferences */}
          <div className="w-full md:w-1/2 border border-gray-200 rounded-xl shadow-lg bg-white p-6 sm:p-8 md:p-10 flex flex-col items-center text-center">

            <div className="w-20 h-20 rounded-full bg-[#8b0038]/10 flex items-center justify-center mb-6">
              <FaHandshake className="text-4xl text-[#8b0038]" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif text-[#8b0038] mb-4">
              Fill Up Your Partner's Preference Details
            </h2>

            <p className="text-gray-600 leading-7 mb-8 max-w-md">
              Add your partner's preferences for better matches.
              We will recommend suitable partners based on your
              profile and preferences.
            </p>

            <button
              type="button"
              onClick={() => navigate("/partnerPreferences")}
              className="mt-auto w-full sm:w-auto bg-[#8b0038] text-white px-6 py-3 rounded-md hover:bg-[#70002d] transition duration-300"
            >
              Add Partner Preference
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default RegistrationSuccess;
