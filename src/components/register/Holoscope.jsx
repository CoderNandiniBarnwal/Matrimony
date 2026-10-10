import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Horoscope() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#fffaf5]">
      <div className="w-[95%] sm:w-[90%] max-w-[1200px] mx-auto my-6 md:my-10 border border-gray-200 shadow-lg rounded-xl overflow-hidden py-8 px-5 sm:px-8 md:px-10 lg:px-12">
        {/* Horoscope Heading */}
        <h1 className="text-3xl sm:text-4xl font-serif text-center text-[#8b0038] mb-8">
          Horoscope
        </h1>

        {/* Sub Caste & Mangalik */}
        <div className="flex flex-col md:flex-row gap-0 md:gap-6">
          {/* Sub Caste */}
          <div className="mb-5 w-full md:w-1/2">
            <label className="block text-gray-700 mb-1">
              Sub Caste <span className="text-red-500">*</span>
            </label>

            <input
              type="text"
              required
              placeholder="Enter Sub Caste"
              className="w-full border-2 border-gray-300 bg-transparent p-2 outline-none focus:border-[#a87955]"
            />
          </div>

          {/* Mangalik */}
          <div className="mb-5 w-full md:w-1/2">
            <label className="block text-gray-700 mb-1">
              Mangalik <span className="text-red-500">*</span>
            </label>

            <select
              required
              defaultValue=""
              className="w-full border-2 border-gray-300 bg-transparent p-2 outline-none focus:border-[#a87955]"
            >
              <option value="" disabled>
                Select Mangalik
              </option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
              <option value="partial">Anshik Mangalik</option>
              <option value="dont_know">Don't Know</option>
            </select>
          </div>
        </div>

        {/* Star & Horoscope */}
        <div className="flex flex-col md:flex-row gap-0 md:gap-6">
          {/* Star */}
          <div className="mb-5 w-full md:w-1/2">
            <label className="block text-gray-700 mb-1">Star</label>

            <select
              defaultValue=""
              className="w-full border-2 border-gray-300 bg-transparent p-2 outline-none focus:border-[#a87955]"
            >
              <option value="" disabled>
                Select Star
              </option>
              <option value="ashwini">Ashwini</option>
              <option value="bharani">Bharani</option>
              <option value="krittika">Krittika</option>
              <option value="rohini">Rohini</option>
              <option value="mrigashira">Mrigashira</option>
              <option value="ardra">Ardra</option>
              <option value="punarvasu">Punarvasu</option>
              <option value="pushya">Pushya</option>
              <option value="ashlesha">Ashlesha</option>
              <option value="magha">Magha</option>
              <option value="purva_phalguni">Purva Phalguni</option>
              <option value="uttara_phalguni">Uttara Phalguni</option>
              <option value="hasta">Hasta</option>
              <option value="chitra">Chitra</option>
              <option value="swati">Swati</option>
              <option value="vishakha">Vishakha</option>
              <option value="anuradha">Anuradha</option>
              <option value="jyeshtha">Jyeshtha</option>
              <option value="mula">Mula</option>
              <option value="purva_ashadha">Purva Ashadha</option>
              <option value="uttara_ashadha">Uttara Ashadha</option>
              <option value="shravana">Shravana</option>
              <option value="dhanishta">Dhanishta</option>
              <option value="shatabhisha">Shatabhisha</option>
              <option value="purva_bhadrapada">Purva Bhadrapada</option>
              <option value="uttara_bhadrapada">Uttara Bhadrapada</option>
              <option value="revati">Revati</option>
              <option value="dont_know">Don't Know</option>
            </select>
          </div>

          {/* Horoscope */}
          <div className="mb-5 w-full md:w-1/2">
            <label className="block text-gray-700 mb-1">Horoscope</label>

            <select
              defaultValue=""
              className="w-full border-2 border-gray-300 bg-transparent p-2 outline-none focus:border-[#a87955]"
            >
              <option value="" disabled>
                Select Horoscope
              </option>
              <option value="available">Available</option>
              <option value="not_available">Not Available</option>
              <option value="dont_know">Don't Know</option>
            </select>
          </div>
        </div>

        {/* Gothra & Moonsign */}
        <div className="flex flex-col md:flex-row gap-0 md:gap-6">
          {/* Gothra */}
          <div className="mb-5 w-full md:w-1/2">
            <label className="block text-gray-700 mb-1">Gothra</label>

            <input
              type="text"
              placeholder="Enter Gothra"
              className="w-full border-2 border-gray-300 bg-transparent p-2 outline-none focus:border-[#a87955]"
            />
          </div>

          {/* Moonsign */}
          <div className="mb-5 w-full md:w-1/2">
            <label className="block text-gray-700 mb-1">Moonsign</label>

            <select
              defaultValue=""
              className="w-full border-2 border-gray-300 bg-transparent p-2 outline-none focus:border-[#a87955]"
            >
              <option value="" disabled>
                Select Moonsign
              </option>
              <option value="aries">Mesh (Aries)</option>
              <option value="taurus">Vrishabh (Taurus)</option>
              <option value="gemini">Mithun (Gemini)</option>
              <option value="cancer">Kark (Cancer)</option>
              <option value="leo">Singh (Leo)</option>
              <option value="virgo">Kanya (Virgo)</option>
              <option value="libra">Tula (Libra)</option>
              <option value="scorpio">Vrishchik (Scorpio)</option>
              <option value="sagittarius">Dhanu (Sagittarius)</option>
              <option value="capricorn">Makar (Capricorn)</option>
              <option value="aquarius">Kumbh (Aquarius)</option>
              <option value="pisces">Meen (Pisces)</option>
              <option value="dont_know">Don't Know</option>
            </select>
          </div>
        </div>

        {/* About Me Heading */}
        <h2 className="text-2xl sm:text-3xl font-serif text-center text-[#8b0038] mt-16 mb-6">
          About Me
        </h2>

        {/* About Me Textarea */}
        <div className="mb-5 w-full">
          <label className="block text-gray-700 mb-1">
            About Me <span className="text-red-500">*</span>
          </label>

          <textarea
            required
            rows={5}
            maxLength={1000}
            placeholder="Write something about yourself, your personality, interests, family, and lifestyle..."
            className="w-full border-2 border-gray-300 bg-transparent p-3 outline-none focus:border-[#a87955] resize-y"
          />
          <p className="text-sm text-gray-500 mt-1">Maximum 1000 characters.</p>
        </div>

        {/* Previous & Save Buttons */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8">
            <button
              type="button"
              onClick={() => navigate("/foodLifestyle")}
              className="w-full sm:w-auto border-2 border-[#8b0038] text-[#8b0038] px-8 py-3 rounded-md hover:bg-[#8b0038] hover:text-white transition"
            >
              Previous
            </button>

            <button
              type="button"
              onClick={() => navigate("/upload")}
              className="w-full sm:w-auto bg-[#8b0038] text-white px-8 py-3 rounded-md hover:bg-[#70002d] transition"
            >
              Save & Continue
            </button>
        </div>
      </div>
    </div>
  );
}

export default Horoscope;
