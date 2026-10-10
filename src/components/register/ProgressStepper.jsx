import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function ProgressStepper() {
  const navigate = useNavigate();
  const location = useLocation();

  const steps = [
    { name: "Basic Information", path: "/basicinformation" },
    { name: "Education Qualification", path: "/education" },
    { name: "Food / Lifestyle", path: "/foodLifestyle" },
    { name: "Horoscope", path: "/horoscope" },
    { name: "Upload Photo", path: "/upload" },
  ];

  return (
    <div className="w-[95%] sm:w-[90%] max-w-[1200px] mx-auto my-6 md:my-10">
      <div className="w-full min-h-[150px] border border-gray-200 shadow-lg rounded-xl overflow-hidden bg-[#fffaf5] flex items-center">
        <div className="w-full px-2 py-6 sm:px-5 md:px-8">
          <div className="flex w-full items-start">
            {steps.map((step, index) => {
              const isActive = location.pathname === step.path;

              return (
                <React.Fragment key={step.path}>
                  <button
                    type="button"
                    onClick={() => navigate(step.path)}
                    className="flex min-w-0 flex-1 flex-col items-center cursor-pointer"
                  >
                    <div
                      className={`flex shrink-0 items-center justify-center rounded-full border-2 font-semibold h-7 w-7 text-[9px] min-[400px]:h-8 min-[400px]:w-8 min-[400px]:text-[10px] sm:h-9 sm:w-9 sm:text-xs md:h-10 md:w-10 md:text-sm ${
                        isActive
                          ? "border-[#8b0038] bg-[#8b0038] text-white"
                          : "border-[#8b0038] bg-white text-[#8b0038]"
                      }`}
                    >
                      {index + 1}
                    </div>

                    <span
                      className={`mt-2 w-full text-center whitespace-normal break-words font-semibold text-[8px] min-[400px]:text-[9px] sm:text-[10px] md:text-xs lg:text-sm leading-tight ${
                        isActive ? "text-[#8b0038]" : "text-gray-700"
                      }`}
                      title={step.name}
                    >
                      {step.name}
                    </span>
                  </button>

                  {index < steps.length - 1 && (
                    <div className="flex-1 min-w-0 h-[2px] bg-gray-300 mt-3 min-[400px]:mt-[15px] sm:mt-[18px] md:mt-5" />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressStepper;