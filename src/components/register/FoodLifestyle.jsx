import React from "react";
import { Link, useNavigate } from "react-router-dom";

function FoodLifestyle() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#fffaf5]">
      <div className="w-[95%] sm:w-[90%] max-w-[1200px] mx-auto my-6 md:my-10 border border-gray-200 shadow-lg rounded-xl overflow-hidden py-8 px-5 sm:px-8 md:px-10 lg:px-12">
        <h1 className="text-3xl sm:text-4xl font-serif text-center text-[#8b0038] mb-8">
          Food & Lifestyle
        </h1>

        {/* Height & Weight */}
        <div className="flex flex-col md:flex-row gap-0 md:gap-6">
          <div className="mb-5 w-full md:w-1/2">
            <label className="block text-gray-700 mb-1">
              Height <span className="text-red-500">*</span>
            </label>

            <select
              required
              defaultValue=""
              className="w-full border-2 border-gray-300 bg-transparent p-2 outline-none focus:border-[#a87955]"
            >
              <option value="" disabled>
                Select Height
              </option>
              {Array.from({ length: 61 }, (_, i) => {
                const cm = 120 + i * 2;
                const feet = Math.floor(cm / 30.48);
                const inches = Math.round((cm / 2.54) % 12);

                return (
                  <option key={cm} value={cm}>
                    {`${Math.floor(cm / 30.48)} ft ${Math.round(
                      (cm / 2.54) % 12,
                    )} in (${cm} cm)`}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="mb-5 w-full md:w-1/2">
            <label className="block text-gray-700 mb-1">
              Weight <span className="text-red-500">*</span>
            </label>

            <div className="flex items-center">
              <input
                type="number"
                min="25"
                max="250"
                required
                placeholder="Enter weight"
                className="w-full border-2 border-gray-300 bg-transparent p-2 outline-none focus:border-[#a87955]"
              />
              <span className="ml-2 text-gray-600">kg</span>
            </div>
          </div>
        </div>

        {/* Eating & Smoking Habits */}
        <div className="flex flex-col md:flex-row gap-0 md:gap-6">
          <div className="mb-5 w-full md:w-1/2">
            <label className="block text-gray-700 mb-1">
              Eating Habit <span className="text-red-500">*</span>
            </label>

            <select
              required
              defaultValue=""
              className="w-full border-2 border-gray-300 bg-transparent p-2 outline-none focus:border-[#a87955]"
            >
              <option value="" disabled>
                Select Eating Habit
              </option>
              <option value="vegetarian">Vegetarian</option>
              <option value="non_vegetarian">Non-Vegetarian</option>
              <option value="eggetarian">Eggetarian</option>
              <option value="vegan">Vegan</option>
              <option value="jain">Jain</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-5 w-full md:w-1/2">
            <label className="block text-gray-700 mb-1">
              Smoking Habit <span className="text-red-500">*</span>
            </label>

            <select
              required
              defaultValue=""
              className="w-full border-2 border-gray-300 bg-transparent p-2 outline-none focus:border-[#a87955]"
            >
              <option value="" disabled>
                Select Smoking Habit
              </option>
              <option value="never">Never Smokes</option>
              <option value="occasionally">Occasionally</option>
              <option value="regularly">Regularly</option>
            </select>
          </div>
        </div>

        {/* Drinking & Body Type */}
        <div className="flex flex-col md:flex-row gap-0 md:gap-6">
          <div className="mb-5 w-full md:w-1/2">
            <label className="block text-gray-700 mb-1">
              Drinking Habit <span className="text-red-500">*</span>
            </label>

            <select
              required
              defaultValue=""
              className="w-full border-2 border-gray-300 bg-transparent p-2 outline-none focus:border-[#a87955]"
            >
              <option value="" disabled>
                Select Drinking Habit
              </option>
              <option value="never">Never Drinks</option>
              <option value="occasionally">Occasionally</option>
              <option value="regularly">Regularly</option>
            </select>
          </div>

          <div className="mb-5 w-full md:w-1/2">
            <label className="block text-gray-700 mb-1">
              Body Type <span className="text-red-500">*</span>
            </label>

            <select
              required
              defaultValue=""
              className="w-full border-2 border-gray-300 bg-transparent p-2 outline-none focus:border-[#a87955]"
            >
              <option value="" disabled>
                Select Body Type
              </option>
              <option value="slim">Slim</option>
              <option value="average">Average</option>
              <option value="athletic">Athletic</option>
              <option value="heavy">Heavy</option>
            </select>
          </div>
        </div>

        {/* Skin Tone */}
        <div className="flex flex-col md:flex-row gap-0 md:gap-6">
          <div className="mb-5 w-full md:w-1/2">
            <label className="block text-gray-700 mb-1">
              Skin Tone <span className="text-red-500">*</span>
            </label>

            <select
              required
              defaultValue=""
              className="w-full border-2 border-gray-300 bg-transparent p-2 outline-none focus:border-[#a87955]"
            >
              <option value="" disabled>
                Select Skin Tone
              </option>
              <option value="very_fair">Very Fair</option>
              <option value="fair">Fair</option>
              <option value="wheatish">Wheatish</option>
              <option value="wheatish_brown">Wheatish Brown</option>
              <option value="brown">Brown</option>
              <option value="dark">Dark</option>
            </select>
          </div>
        </div>

        {/* Previous & Save Buttons */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8">
            <button
              type="button"
              onClick={() => navigate("/education")}
              className="w-full sm:w-auto border-2 border-[#8b0038] text-[#8b0038] px-8 py-3 rounded-md hover:bg-[#8b0038] hover:text-white transition"
            >
              Previous
            </button>

            <button
              type="button"
              onClick={() => navigate("/horoscope")}
              className="w-full sm:w-auto bg-[#8b0038] text-white px-8 py-3 rounded-md hover:bg-[#70002d] transition"
            >
              Save & Continue
            </button>
        </div>
      </div>
    </div>
  );
}

export default FoodLifestyle;
