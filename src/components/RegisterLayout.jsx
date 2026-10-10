import { Outlet } from "react-router-dom";
import ProgressStepper from "./register/ProgressStepper";

function RegisterLayout() {
  return (
    <div className="min-h-screen bg-[#fffaf5]">
      <div className="w-[95%] sm:w-[90%] max-w-[1200px] mx-auto my-6 md:my-10 border border-gray-200 shadow-lg rounded-xl overflow-hidden py-8 px-5 sm:px-8 md:px-10 lg:px-12">
        <ProgressStepper />
        <Outlet />
      </div>
    </div>
  );
}

export default RegisterLayout;
