import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function BasicInformations() {
  const navigate = useNavigate();

  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [totalChildren, setTotalChildren] = useState("");

  const countryStates = {
    india: ["West Bengal", "Maharashtra", "Karnataka", "Delhi", "Tamil Nadu"],

    usa: ["California", "Texas", "New York", "Florida", "Illinois"],

    canada: ["Ontario", "Quebec", "Alberta", "British Columbia", "Manitoba"],

    australia: [
      "New South Wales",
      "Victoria",
      "Queensland",
      "Western Australia",
      "Tasmania",
    ],

    uk: ["England", "Scotland", "Wales", "Northern Ireland"],

    germany: ["Bavaria", "Berlin", "Hamburg", "Hesse", "Saxony"],

    france: [
      "Île-de-France",
      "Provence-Alpes-Côte d'Azur",
      "Normandy",
      "Brittany",
      "Occitanie",
    ],

    uae: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Fujairah"],

    pakistan: [
      "Punjab",
      "Sindh",
      "Balochistan",
      "Khyber Pakhtunkhwa",
      "Gilgit-Baltistan",
    ],

    bangladesh: ["Dhaka", "Chattogram", "Rajshahi", "Khulna", "Sylhet"],
  };

  const stateCities = {
    // India
    "West Bengal": ["Kolkata", "Asansol", "Durgapur", "Siliguri", "Howrah"],
    Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik", "Thane"],
    Karnataka: ["Bengaluru", "Mysuru", "Mangaluru", "Hubballi", "Belagavi"],
    Delhi: ["New Delhi", "Dwarka", "Rohini", "Saket", "Karol Bagh"],
    "Tamil Nadu": [
      "Chennai",
      "Coimbatore",
      "Madurai",
      "Salem",
      "Tiruchirappalli",
    ],

    // USA
    California: [
      "Los Angeles",
      "San Francisco",
      "San Diego",
      "San Jose",
      "Sacramento",
    ],
    Texas: ["Houston", "Austin", "Dallas", "San Antonio", "Fort Worth"],
    "New York": ["New York City", "Buffalo", "Rochester", "Albany", "Syracuse"],
    Florida: ["Miami", "Orlando", "Tampa", "Jacksonville", "Tallahassee"],
    Illinois: ["Chicago", "Aurora", "Naperville", "Rockford", "Springfield"],

    // Canada
    Ontario: ["Toronto", "Ottawa", "Mississauga", "Hamilton", "London"],
    Quebec: ["Montreal", "Quebec City", "Laval", "Gatineau", "Sherbrooke"],
    Alberta: ["Calgary", "Edmonton", "Red Deer", "Lethbridge", "Medicine Hat"],
    "British Columbia": [
      "Vancouver",
      "Victoria",
      "Surrey",
      "Burnaby",
      "Richmond",
    ],
    Manitoba: [
      "Winnipeg",
      "Brandon",
      "Steinbach",
      "Thompson",
      "Portage la Prairie",
    ],

    // Australia
    "New South Wales": [
      "Sydney",
      "Newcastle",
      "Wollongong",
      "Parramatta",
      "Albury",
    ],
    Victoria: ["Melbourne", "Geelong", "Ballarat", "Bendigo", "Shepparton"],
    Queensland: ["Brisbane", "Gold Coast", "Cairns", "Townsville", "Toowoomba"],
    "Western Australia": [
      "Perth",
      "Bunbury",
      "Albany",
      "Geraldton",
      "Kalgoorlie",
    ],
    Tasmania: ["Hobart", "Launceston", "Devonport", "Burnie", "Ulverstone"],

    // UK
    England: ["London", "Manchester", "Birmingham", "Liverpool", "Leeds"],
    Scotland: ["Edinburgh", "Glasgow", "Aberdeen", "Dundee", "Inverness"],
    Wales: ["Cardiff", "Swansea", "Newport", "Wrexham", "Bangor"],
    "Northern Ireland": [
      "Belfast",
      "Derry",
      "Lisburn",
      "Newtownabbey",
      "Bangor",
    ],

    // Germany
    Bavaria: ["Munich", "Nuremberg", "Augsburg", "Regensburg", "Würzburg"],
    Berlin: ["Berlin", "Mitte", "Spandau", "Pankow", "Neukölln"],
    Hamburg: ["Hamburg", "Altona", "Bergedorf", "Harburg", "Wandsbek"],
    Hesse: ["Frankfurt", "Wiesbaden", "Kassel", "Darmstadt", "Offenbach"],
    Saxony: ["Dresden", "Leipzig", "Chemnitz", "Zwickau", "Görlitz"],

    // France
    "Île-de-France": [
      "Paris",
      "Versailles",
      "Saint-Denis",
      "Montreuil",
      "Nanterre",
    ],
    "Provence-Alpes-Côte d'Azur": [
      "Marseille",
      "Nice",
      "Toulon",
      "Avignon",
      "Cannes",
    ],
    Normandy: ["Rouen", "Caen", "Le Havre", "Évreux", "Cherbourg"],
    Brittany: ["Rennes", "Brest", "Quimper", "Lorient", "Vannes"],
    Occitanie: ["Toulouse", "Montpellier", "Nîmes", "Perpignan", "Béziers"],

    // UAE
    Dubai: ["Dubai", "Deira", "Jumeirah", "Bur Dubai", "Al Barsha"],
    "Abu Dhabi": [
      "Abu Dhabi City",
      "Al Ain",
      "Madinat Zayed",
      "Ruwais",
      "Liwa",
    ],
    Sharjah: [
      "Sharjah City",
      "Al Dhaid",
      "Khor Fakkan",
      "Kalba",
      "Dibba Al-Hisn",
    ],
    Ajman: ["Ajman City", "Al Jurf", "Al Rawda", "Al Nuaimiya", "Masfout"],
    Fujairah: [
      "Fujairah City",
      "Dibba Al-Fujairah",
      "Dhadna",
      "Al Aqah",
      "Masafi",
    ],

    // Pakistan
    Punjab: ["Lahore", "Faisalabad", "Rawalpindi", "Multan", "Gujranwala"],
    Sindh: ["Karachi", "Hyderabad", "Sukkur", "Larkana", "Mirpur Khas"],
    Balochistan: ["Quetta", "Gwadar", "Turbat", "Khuzdar", "Chaman"],
    "Khyber Pakhtunkhwa": [
      "Peshawar",
      "Mardan",
      "Abbottabad",
      "Mingora",
      "Kohat",
    ],
    "Gilgit-Baltistan": ["Gilgit", "Skardu", "Chilas", "Hunza", "Gahkuch"],

    // Bangladesh
    Dhaka: ["Dhaka", "Gazipur", "Narayanganj", "Tangail", "Narsingdi"],
    Chattogram: ["Chattogram", "Cox's Bazar", "Comilla", "Feni", "Rangamati"],
    Rajshahi: ["Rajshahi", "Bogra", "Pabna", "Natore", "Naogaon"],
    Khulna: ["Khulna", "Jessore", "Satkhira", "Bagerhat", "Kushtia"],
    Sylhet: ["Sylhet", "Moulvibazar", "Habiganj", "Sunamganj", "Beanibazar"],
  };

  return (
    <div className="min-h-screen bg-[#fffaf5]">
      <div className="w-[95%] sm:w-[90%] max-w-[1200px] mx-auto my-6 md:my-10 border border-gray-200 shadow-lg rounded-xl overflow-hidden py-8 px-5 sm:px-8 md:px-10 lg:px-12">
        {/* ================= BASIC INFORMATION ================= */}

        <h1 className="text-3xl sm:text-4xl font-serif text-center text-[#8b0038] mb-8">
          Some Basic Information
        </h1>

        {/* Country & State */}
        <div className="flex flex-col md:flex-row gap-0 md:gap-6">
          {/* Country */}
          <div className="mb-5 w-full md:w-1/2">
            <label className="block text-gray-700 mb-1">Country</label>

            <select
              className="w-full border-2 border-gray-300 bg-transparent p-2 outline-none focus:border-[#a87955]"
              value={country}
              onChange={(e) => {
                setCountry(e.target.value);
                setState("");
                setCity("");
              }}
            >
              <option value="">Select Country</option>
              <option value="india">India</option>
              <option value="usa">United States</option>
              <option value="canada">Canada</option>
              <option value="australia">Australia</option>
              <option value="uk">United Kingdom</option>
              <option value="germany">Germany</option>
              <option value="france">France</option>
              <option value="uae">United Arab Emirates</option>
              <option value="pakistan">Pakistan</option>
              <option value="bangladesh">Bangladesh</option>
            </select>
          </div>

          {/* State */}
          <div className="mb-5 w-full md:w-1/2">
            <label className="block text-gray-700 mb-1">State</label>

            <select
              className="w-full border-2 border-gray-300 bg-transparent p-2 outline-none focus:border-[#a87955] disabled:bg-gray-100"
              value={state}
              onChange={(e) => {
                setState(e.target.value);
                setCity("");
              }}
              disabled={!country}
            >
              {!country ? (
                <option value="">Please choose country first</option>
              ) : (
                <>
                  <option value="">Select State</option>

                  {countryStates[country].map((stateName) => (
                    <option key={stateName} value={stateName}>
                      {stateName}
                    </option>
                  ))}
                </>
              )}
            </select>
          </div>
        </div>

        {/* City & Marital Status */}
        <div className="flex flex-col md:flex-row gap-0 md:gap-6">
          {/* City */}
          <div className="mb-5 w-full md:w-1/2">
            <label className="block text-gray-700 mb-1">City</label>

            <select
              className="w-full border-2 border-gray-300 bg-transparent p-2 outline-none focus:border-[#a87955] disabled:bg-gray-100"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              disabled={!state}
            >
              {!state ? (
                <option value="">Please choose state first</option>
              ) : (
                <>
                  <option value="">Select City</option>

                  {stateCities[state]?.map((cityName) => (
                    <option key={cityName} value={cityName}>
                      {cityName}
                    </option>
                  ))}
                </>
              )}
            </select>
          </div>

          {/* Marital Status */}
          <div className="mb-5 w-full md:w-1/2">
            <label className="block text-gray-700 mb-1">Marital Status</label>

            <select className="w-full border-2 border-gray-300 bg-transparent p-2 outline-none focus:border-[#a87955]">
              <option value="">Select Marital Status</option>
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="divorced">Divorced</option>
              <option value="widow">Widow</option>
            </select>
          </div>
        </div>

        {/* Total Children & Status of Children */}
        <div className="flex flex-col md:flex-row gap-0 md:gap-6">
          {/* Total Children */}
          <div className="mb-5 w-full md:w-1/2">
            <label className="block text-gray-700 mb-1">Total Children</label>

            <select
              className="w-full border-2 border-gray-300 bg-transparent p-2 outline-none focus:border-[#a87955]"
              value={totalChildren}
              onChange={(e) => setTotalChildren(e.target.value)}
            >
              <option value="">Select</option>
              <option value="0">No Children</option>
              <option value="1">1 Child</option>
              <option value="2">2 Children</option>
              <option value="3">3 Children</option>
              <option value="4+">4+ Children</option>
            </select>
          </div>

          {/* Status of Children */}
          <div className="mb-5 w-full md:w-1/2">
            <label className="block text-gray-700 mb-1">
              Status of Children
            </label>

            <select
              className="w-full border-2 border-gray-300 bg-transparent p-2 outline-none focus:border-[#a87955] disabled:bg-gray-100 disabled:cursor-not-allowed"
              disabled={totalChildren === "0"}
            >
              <option value="">Select</option>
              <option value="living_with_me">Living with me</option>
              <option value="non_living_with_me">Non living with me</option>
            </select>
          </div>
        </div>

        {/* Mother Tongue */}
        <div className="flex flex-col md:flex-row gap-0 md:gap-6">
          <div className="mb-5 w-full md:w-1/2">
            <label className="block text-gray-700 mb-1">Mother Tongue</label>

            <select className="w-full border-2 border-gray-300 bg-transparent p-2 outline-none focus:border-[#a87955]">
              <option value="">Select Mother Tongue</option>
              <option value="hindi">Hindi</option>
              <option value="bengali">Bengali</option>
              <option value="english">English</option>
              <option value="tamil">Tamil</option>
              <option value="telugu">Telugu</option>
              <option value="marathi">Marathi</option>
              <option value="gujarati">Gujarati</option>
              <option value="punjabi">Punjabi</option>
              <option value="urdu">Urdu</option>
              <option value="odia">Odia</option>
            </select>
          </div>
        </div>

        {/* ================= PARTNER PREFERENCES ================= */}

        <h1 className="text-3xl sm:text-4xl font-serif text-center text-[#8b0038] mt-10 mb-8">
          Some Basic Partner Preferences
        </h1>

        {/* Looking For */}
        <div className="flex flex-col md:flex-row gap-0 md:gap-6">
          <div className="mb-5 w-full md:w-1/2">
            <label className="block text-gray-700 mb-1">Looking For</label>

            <select className="w-full border-2 border-gray-300 bg-transparent p-2 outline-none focus:border-[#a87955]">
              <option value="">Select</option>
              <option value="bride">Bride</option>
              <option value="groom">Groom</option>
            </select>
          </div>
        </div>

        {/* Partner Age */}
        <div className="flex flex-col md:flex-row gap-0 md:gap-6">
          <div className="mb-5 w-full md:w-1/2">
            <label className="block text-gray-700 mb-1">Partner From Age</label>

            <select className="w-full border-2 border-gray-300 bg-transparent p-2 outline-none focus:border-[#a87955]">
              <option value="">Select Age</option>

              {Array.from({ length: 53 }, (_, i) => i + 18).map((age) => (
                <option key={age} value={age}>
                  {age} Years
                </option>
              ))}
            </select>
          </div>

          <div className="mb-5 w-full md:w-1/2">
            <label className="block text-gray-700 mb-1">Partner To Age</label>

            <select className="w-full border-2 border-gray-300 bg-transparent p-2 outline-none focus:border-[#a87955]">
              <option value="">Select Age</option>

              {Array.from({ length: 53 }, (_, i) => i + 18).map((age) => (
                <option key={age} value={age}>
                  {age} Years
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Partner Height */}
        <div className="flex flex-col md:flex-row gap-0 md:gap-6">
          <div className="mb-5 w-full md:w-1/2">
            <label className="block text-gray-700 mb-1">
              Partner From Height
            </label>

            <select className="w-full border-2 border-gray-300 bg-transparent p-2 outline-none focus:border-[#a87955]">
              <option value="">Select Height</option>
              <option value="4.5">4'5"</option>
              <option value="4.6">4'6"</option>
              <option value="4.7">4'7"</option>
              <option value="4.8">4'8"</option>
              <option value="4.9">4'9"</option>
              <option value="4.10">4'10"</option>
              <option value="4.11">4'11"</option>
              <option value="5.0">5'0"</option>
              <option value="5.1">5'1"</option>
              <option value="5.2">5'2"</option>
              <option value="5.3">5'3"</option>
              <option value="5.4">5'4"</option>
              <option value="5.5">5'5"</option>
              <option value="5.6">5'6"</option>
              <option value="5.7">5'7"</option>
              <option value="5.8">5'8"</option>
              <option value="5.9">5'9"</option>
              <option value="5.10">5'10"</option>
              <option value="5.11">5'11"</option>
              <option value="6.0">6'0"</option>
              <option value="6.1">6'1"</option>
              <option value="6.2">6'2"</option>
              <option value="6.3">6'3"</option>
              <option value="6.4">6'4"</option>
            </select>
          </div>

          <div className="mb-5 w-full md:w-1/2">
            <label className="block text-gray-700 mb-1">
              Partner To Height
            </label>

            <select className="w-full border-2 border-gray-300 bg-transparent p-2 outline-none focus:border-[#a87955]">
              <option value="">Select Height</option>
              <option value="4.5">4'5"</option>
              <option value="4.6">4'6"</option>
              <option value="4.7">4'7"</option>
              <option value="4.8">4'8"</option>
              <option value="4.9">4'9"</option>
              <option value="4.10">4'10"</option>
              <option value="4.11">4'11"</option>
              <option value="5.0">5'0"</option>
              <option value="5.1">5'1"</option>
              <option value="5.2">5'2"</option>
              <option value="5.3">5'3"</option>
              <option value="5.4">5'4"</option>
              <option value="5.5">5'5"</option>
              <option value="5.6">5'6"</option>
              <option value="5.7">5'7"</option>
              <option value="5.8">5'8"</option>
              <option value="5.9">5'9"</option>
              <option value="5.10">5'10"</option>
              <option value="5.11">5'11"</option>
              <option value="6.0">6'0"</option>
              <option value="6.1">6'1"</option>
              <option value="6.2">6'2"</option>
              <option value="6.3">6'3"</option>
              <option value="6.4">6'4"</option>
            </select>
          </div>
        </div>

        {/* Save & Continue */}
        <div className="flex justify-center mt-6">
          <button
            type="button"
            onClick={() => navigate("/education")}
            className="bg-[#8b0038] text-white px-8 py-3 rounded-md hover:bg-[#70002d] transition"
          >
            Save & Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default BasicInformations;
