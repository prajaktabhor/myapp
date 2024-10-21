import React, { useState } from "react";
import Booking from "./Booking";
import logo from "../assests/main.png";
import { Navigate } from "react-router-dom";

const File = () => {
  const [selectedVehicle, setSelectedVehicle] = useState("Hatchback");
  const [showBooking, setShowBooking] = useState(false);

  const onNext = () => {
    if (selectedVehicle) {
      setShowBooking(true);
    }
  };

  const selectVehicle = (vehicle) => {
    setSelectedVehicle(vehicle);
  };

  if (showBooking) {
    return <Booking />;
  }

  return (
    <div className="items-center justify-start px-4 md:px-10 lg:px-16 -mt-12">
      <div className="text-center">
        <img
          src={logo}
          className="w-60 h-60 sm:w-64 sm:h-64 object-contain mx-auto"
          alt="Car"
        />
      </div>
      <ul className="flex flex-col sm:flex-row items-center justify-start sm:ml-20 lg:ml-48 mt-5">
        <li>
          <div className="bg-pink-500 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center">
            <span className="text-white text-lg sm:text-2xl">
              <span className="text-2xl sm:text-3xl">1</span>/5
            </span>
          </div>
        </li>
        <li className="flex flex-col ml-4 sm:ml-5">
          <h1 className="font-bold text-lg sm:text-2xl">Vehicle Type</h1>
          <p className="mt-2 text-sm sm:text-md font-thin">
            Select vehicle type below
          </p>
        </li>
      </ul>

      <div className="flex space-x-4 sm:space-x-12 mt-6 justify-center ml-10">
        <ul className="flex flex-wrap justify-center sm:justify-end p-5 sm:gap-4 ml-14">
          <li
            className={`p-6 border ${
              selectedVehicle === "Hatchback"
                ? "border-pink-500"
                : "border-transparent"
            } rounded-xl px-20 py-1 flex flex-col items-center hover:rounded-3xl cursor-pointer`}
            onClick={() => selectVehicle("Hatchback")}
          >
            <img
              src="Hatchback.png"
              className="sm:w-22 sm:h-12 mt-3"
              alt="Hatchback"
            />
            <p className="mb-2 text-center text-pink-500">Hatchback</p>
          </li>

          <li
            className={`p-6 border ${
              selectedVehicle === "Sedan"
                ? "border-pink-500"
                : "border-transparent"
            } hover:border-pink-500 rounded-xl px-20 py-1 flex flex-col items-center hover:rounded-3xl cursor-pointer`}
            onClick={() => selectVehicle("Sedan")}
          >
            <img
              src="Sedan.png"
              className="w-22 h-12 sm:w-28 sm:h-14 mt-2"
              alt="Sedan"
            />
            <p className="mt-2 text-center">Sedan</p>
          </li>

          <li
            className={`p-6 border ${
              selectedVehicle === "Compact SUV"
                ? "border-pink-500"
                : "border-transparent"
            } hover:border-pink-500 rounded-xl px-20 py-1 flex flex-col items-center hover:rounded-3xl cursor-pointer`}
            onClick={() => selectVehicle("Compact SUV")}
          >
            <img
              src="Compact SUV.png"
              className="w-22 h-12 sm:w-28 sm:h-14 mt-2"
              alt="Compact SUV"
            />
            <p className="mt-2 text-center mb-1">Compact SUV</p>
          </li>

          <li
            className={`p-6 border ${
              selectedVehicle === "SUV"
                ? "border-pink-500"
                : "border-transparent"
            } hover:border-pink-500 rounded-xl px-20 py-1 flex flex-col items-center hover:rounded-3xl cursor-pointer`}
            onClick={() => selectVehicle("SUV")}
          >
            <img
              src="SUV.png"
              className="w-22 h-12 sm:w-28 sm:h-14 mt-2"
              alt="SUV"
            />
            <p className="mt-2 text-center">SUV</p>
          </li>
        </ul>
      </div>

      <div className="flex justify-center">
        <button
          className={`mt-6 px-8 py-3 ${
            selectedVehicle ? "bg-pink-600" : "bg-gray-400"
          } text-white `}
          onClick={onNext}
          disabled={!selectedVehicle}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default File;
