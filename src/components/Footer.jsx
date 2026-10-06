import React from "react";

function Footer() {
  return (
    <footer className="bg-[#8b0038] text-white">
      <div className="w-[95%] sm:w-[90%] max-w-[1200px] mx-auto py-10 md:py-14">
        <div className="flex md:flex-row flex-col">
          <div className="w-full md:w-[30%] md:border-r-2 border-white/30 text-center md:text-left mb-8 md:mb-0">
            <h3 className="text-2xl sm:text-3xl font-serif italic mb-5">
              Links
            </h3>
            <li>Home</li>
            <li>About Us</li>
            <li>How it work</li>
            <li>Happy Couple</li>
          </div>
          <div className="w-full md:w-[40%] text-center md:text-center px-8 mb-8 md:mb-0">
            <h3 className="text-2xl sm:text-3xl font-semibold flex items-center justify-center mb-5">
              🔔 Bells Matrimony
            </h3>
            <p>
              Connecting hearts, creating lifelong bonds. Join thousands of
              happy couples who found their soulmate through our trusted
              matrimonial platform.
            </p>
            <div className="flex justify-center gap-4 mt-6">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                f
              </div>

              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                ◎
              </div>

              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                ♥️
              </div>

              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                ▶️
              </div>
            </div>
          </div>
          <div className="w-full md:w-[30%] md:border-l-2 border-white/30 text-center md:text-right mb-8 md:mb-0">
            <h3 className="text-2xl sm:text-3xl font-serif italic mb-5">
              {" "}
              Contact
            </h3>
            <div>
              <p>📞 +91 9876543210</p>
              <p>✉️ bharati.bm@gmail.com</p>
              <p>
                📍 45B, Washington Ave,
                <br />
                Manchester, Kentucky 39495
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20 text-center py-4 text-sm px-4">
        © 2026 YourMatrimony. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
