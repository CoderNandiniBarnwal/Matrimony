import React from "react";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineAttachEmail } from "react-icons/md";
function Home() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row px-8 sm:px-8 md:px-12 lg:px-[60px] xl:px-[200px] py-10 sm:py-14 md:py-16 lg:py-[90px] bg-[#faf5e6] gap-10 lg:gap-0">
        <div className="w-full lg:w-[40%] flex justify-center lg:justify-start">
          <div className="rounded-tl-[50px] rounded-br-[50px] bg-gradient-to-r from-purple-800 via-purple-500 to-red-800 pt-3 md:pt-4 pl-3 md:pl-4 w-[280px] sm:w-[330px] md:w-[380px] lg:w-[400px] h-[370px] sm:h-[440px] md:h-[500px] lg:h-[530px] relative">
            <img
              src="couple2.png"
              alt="Couple"
              className="rounded-tl-[50px] rounded-br-[50px] w-full h-full object-cover absolute top-4 left-4"
            />
          </div>
        </div>
        <div className="w-full lg:w-[60%] px-0 sm:px-4 md:px-8 lg:pl-[80px] py-8 lg:py-0"> 
          <h1 className="text-red-600 text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-['Bodono_Moda']">
            WELCOME TO
          </h1>
          <h3 className="text-purple-800 text-4xl font-bold font-['Bodono_Moda']">
            WEDDING MATRIMONY
          </h3>
          <p className="text-xl text-gray-600 mt-4">
            Best wedding matrimony It is a long established fact that a reader
            will be distracted by the readable content of a page when looking at
            its layout.
          </p>
          <p className="text-xl text-gray-600 mt-4">
            <span className="text-purple-800">Click here</span> to Start you
            matrimony service now.
          </p>
          <p className="text-xl text-gray-600 mt-4">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <div className="flex flex-col md:flex-row justify-between mt-8">
            <div className="flex">
              <div className=" border-[6px] border-gray-300 p-3 bg-black text-white rounded-full">
                <LuPhoneCall className="text-2xl" />
              </div>
              <div className=" px-2 text-xl font-semibold">
                <div>Enquiry</div> <div>+91 2698875124</div>
              </div>
            </div>
            <div className="flex py-6 md:py-0">
              <div className="border-[6px] border-gray-300 p-3 bg-black text-white rounded-full">
                <MdOutlineAttachEmail className="text-2xl" />
              </div>
              <div className=" px-2 text-xl font-semibold">
                <div>Mail Us</div> <div>info@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
