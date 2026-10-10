import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function EducationQualification() {
  const navigate = useNavigate();

  const [occupation, setOccupation] = useState("");
  const [designation, setDesignation] = useState("");

  const designationOptions = {
    it: [
      "Software Engineer",
      "Frontend Developer",
      "Backend Developer",
      "Full Stack Developer",
      "Web Developer",
      "Software Tester",
      "UI/UX Designer",
      "System Administrator",
    ],
    doctor: [
      "General Physician",
      "Surgeon",
      "Dentist",
      "Medical Officer",
      "Nurse",
      "Pharmacist",
      "Physiotherapist",
    ],
    teacher: [
      "Teacher",
      "Lecturer",
      "Professor",
      "Principal",
      "School Coordinator",
      "Tutor",
    ],
    banking: [
      "Accountant",
      "Financial Analyst",
      "Bank Officer",
      "Bank Manager",
      "Investment Advisor",
      "Finance Manager",
    ],
    government: [
      "Government Officer",
      "Administrative Officer",
      "Clerk",
      "Government Teacher",
      "Government Engineer",
      "Government Doctor",
    ],
    defence: [
      "Army Officer",
      "Navy Officer",
      "Air Force Officer",
      "Defence Personnel",
      "Defence Engineer",
      "Medical Officer",
    ],
    legal: [
      "Advocate",
      "Legal Advisor",
      "Legal Consultant",
      "Law Officer",
    ],
    business: [
      "Business Owner",
      "Entrepreneur",
      "Managing Director",
      "Director",
      "Business Manager",
    ],
    media: [
      "Journalist",
      "Content Writer",
      "News Reporter",
      "Editor",
      "Media Professional",
    ],
    freelancer: [
      "Freelance Developer",
      "Freelance Designer",
      "Freelance Writer",
      "Freelance Consultant",
    ],
    private_sector: [
      "Manager",
      "Executive",
      "Senior Executive",
      "Associate",
      "Analyst",
      "Consultant",
    ],
    corporate: [
      "Manager",
      "Team Leader",
      "HR Executive",
      "Business Analyst",
      "Project Manager",
      "Consultant",
    ],
    student: ["Student"],
    homemaker: ["Homemaker"],
    retired: ["Retired"],
    not_working: ["Not Working"],
    other: ["Other"],
  };

  const handleOccupationChange = (e) => {
    setOccupation(e.target.value);
    setDesignation("");
  };

  return (
    <div className="min-h-screen bg-[#fffaf5]">
      <div className="w-[95%] sm:w-[90%] max-w-[1200px] mx-auto my-6 md:my-10 border border-gray-200 shadow-lg rounded-xl overflow-hidden py-8 px-5 sm:px-8 md:px-10 lg:px-12">
        <h1 className="text-3xl sm:text-4xl font-serif text-center text-[#8b0038] mb-8">
          Education Qualification
        </h1>

        {/* Education + Employment */}
        <div className="flex flex-col md:flex-row gap-0 md:gap-6">
          <div className="mb-5 w-full md:w-1/2">
            <label className="block text-gray-700 mb-1">
              Education
            </label>

            <select className="w-full border-2 border-gray-300 bg-transparent p-2 outline-none focus:border-[#a87955]">
              <option value="">Select Education</option>
              <option value="10th">10th</option>
              <option value="12th">12th</option>
              <option value="diploma">Diploma</option>
              <option value="iti">ITI</option>
              <option value="graduate">Graduate</option>
              <option value="post_graduate">Post Graduate</option>
              <option value="professional_degree">Professional Degree</option>
              <option value="phd">Ph.D / Doctorate</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-5 w-full md:w-1/2">
            <label className="block text-gray-700 mb-1">
              Employee In
            </label>

            <select className="w-full border-2 border-gray-300 bg-transparent p-2 outline-none focus:border-[#a87955]">
              <option value="">Select Employment</option>
              <option value="private_sector">Private Sector</option>
              <option value="corporate">Corporate</option>
              <option value="government">Government</option>
              <option value="defence">Defence</option>
              <option value="business">Business / Self Employed</option>
              <option value="freelancer">Freelancer</option>
              <option value="student">Student</option>
              <option value="homemaker">Homemaker</option>
              <option value="retired">Retired</option>
              <option value="not_working">Not Working</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        {/* Occupation + Designation */}
        <div className="flex flex-col md:flex-row gap-0 md:gap-6">
          <div className="mb-5 w-full md:w-1/2">
            <label className="block text-gray-700 mb-1">
              Occupation
            </label>

            <select
              value={occupation}
              onChange={handleOccupationChange}
              className="w-full border-2 border-gray-300 bg-transparent p-2 outline-none focus:border-[#a87955]"
            >
              <option value="">Select Occupation</option>
              <option value="it">IT / Software</option>
              <option value="doctor">Doctor / Healthcare</option>
              <option value="teacher">Teacher / Education</option>
              <option value="banking">Banking / Finance</option>
              <option value="government">Government</option>
              <option value="defence">Defence</option>
              <option value="legal">Legal</option>
              <option value="business">Business / Self Employed</option>
              <option value="media">Media / Entertainment</option>
              <option value="freelancer">Freelancer</option>
              <option value="student">Student</option>
              <option value="homemaker">Homemaker</option>
              <option value="retired">Retired</option>
              <option value="not_working">Not Working</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-5 w-full md:w-1/2">
            <label className="block text-gray-700 mb-1">
              Designation
            </label>

            <select
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              disabled={!occupation}
              className="w-full border-2 border-gray-300 bg-transparent p-2 outline-none focus:border-[#a87955] disabled:bg-gray-100 disabled:cursor-not-allowed"
            >
              <option value="">
                {occupation
                  ? "Select Designation"
                  : "Select Occupation First"}
              </option>

              {designationOptions[occupation]?.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Annual Income */}
        <div className="flex flex-col md:flex-row gap-0 md:gap-6">
          <div className="mb-5 w-full md:w-1/2">
            <label className="block text-gray-700 mb-1">
              Annual Income
            </label>

            <select className="w-full border-2 border-gray-300 bg-transparent p-2 outline-none focus:border-[#a87955]">
              <option value="">Select Annual Income</option>
              <option value="below_1_lakh">Below ₹1 Lakh</option>
              <option value="1_3_lakh">₹1 – 3 Lakh</option>
              <option value="3_5_lakh">₹3 – 5 Lakh</option>
              <option value="5_7_lakh">₹5 – 7 Lakh</option>
              <option value="7_10_lakh">₹7 – 10 Lakh</option>
              <option value="10_15_lakh">₹10 – 15 Lakh</option>
              <option value="15_20_lakh">₹15 – 20 Lakh</option>
              <option value="20_30_lakh">₹20 – 30 Lakh</option>
              <option value="30_50_lakh">₹30 – 50 Lakh</option>
              <option value="above_50_lakh">Above ₹50 Lakh</option>
            </select>
          </div>
        </div>

        {/* Previous + Save & Continue */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8">
          <button
            type="button"
            onClick={() => navigate("/basicinformation")}
            className="w-full sm:w-auto border-2 border-[#8b0038] text-[#8b0038] px-8 py-3 rounded-md hover:bg-[#8b0038] hover:text-white transition"
          >
            Previous
          </button>

          <button
            type="button"
            onClick={() => navigate("/foodLifestyle")}
            className="w-full sm:w-auto bg-[#8b0038] text-white px-8 py-3 rounded-md hover:bg-[#70002d] transition"
          >
            Save & Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default EducationQualification;