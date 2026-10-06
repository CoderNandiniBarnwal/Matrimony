import React from "react";

function ProgressStepper() {
  const steps = [
    "Basic Information",
    "Education Qualification",
    "Food / Lifestyle",
    "Horoscope",
    "Upload Photo",
  ];

  return (
    <div className="w-[95%] sm:w-[90%] max-w-[1200px] mx-auto my-6 md:my-10">
      <div className="w-full min-h-[150px] border border-gray-200 shadow-lg rounded-xl overflow-hidden bg-[#fffaf5] flex items-center">
        <div className="w-full px-2 py-6 sm:px-5 md:px-8">
          <div className="flex w-full items-start">
            {steps.map((step, index) => (
              <React.Fragment key={step}>
                {/* Step */}
                <div className="flex min-w-0 flex-1 flex-col items-center">
                  {/* Circle */}
                  <div className="flex shrink-0 items-center justify-center rounded-full border-2 border-[#8b0038] bg-white text-[#8b0038] font-semibold h-7 w-7 text-[9px] min-[400px]:h-8 min-[400px]:w-8 min-[400px]:text-[10px] sm:h-9 sm:w-9 sm:text-xs md:h-10 md:w-10 md:text-sm">
                    {index + 1}
                  </div>

                  {/* Step Name */}
                  <span className="mt-2 w-full text-center whitespace-nowrap overflow-hidden text-ellipsis font-semibold text-gray-700 text-[6px] min-[400px]:text-[7px] sm:text-[10px] md:text-xs lg:text-sm" title={step}>
                    {step}
                  </span>
                </div>

                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="flex-1 min-w-0 h-[2px] bg-gray-300 mt-3 min-[400px]:mt-[15px] sm:mt-[18px] md:mt-5"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressStepper;