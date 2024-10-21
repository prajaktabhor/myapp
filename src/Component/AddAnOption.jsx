import React, { useState } from "react";
import { addOnOption } from "../Data";
import logo from "../assests/main.png";
import BookingSummary from "./BookingSummary";

const AddAnOption = () => {
  const [selected, setSelected] = useState(false);
  const [bookingSummary, setbookingSummary] = useState(false);

  const onNext = () => {
    setbookingSummary(true);
  };

  if (bookingSummary) {
    return <BookingSummary />;
  }

  const handleClick = () => {
    setSelected(!selected);
  };

  return (
    <div className="mb-8">
      <div className="items-center justify-start px-4 md:px-10 lg:px-16 -mt-12 ">
        <div className="text-center">
          <img
            src={logo}
            className="w-60 h-60 sm:w-64 sm:h-64 object-contain mx-auto"
            alt="Car"
          />
        </div>
        <div>
          <ul className="flex flex-col sm:flex-row items-center justify-start sm:ml-20 lg:ml-48 mt-5">
            <li>
              <div className="bg-pink-500 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center">
                <span className="text-white text-lg sm:text-2xl">
                  <span className="text-2xl sm:text-3xl">3</span>/5
                </span>
              </div>
            </li>
            <li className="flex flex-col ml-4 sm:ml-5">
              <h1 className="font-bold text-lg sm:text-2xl">Add-on options</h1>
              <p className="mt-2 text-sm sm:text-md font-thin">
                Add services to your package.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex px-4 mt-6 justify-center">
        <div className="w-full max-w-5xl">
          <ul className="w-full">
            {addOnOption.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center border border-gray-300 px-4 py-3 w-full"
              >
                <div className="flex flex-col items-start">
                  <h1 className="text-lg m-0">{item.title}</h1>
                  <div className="flex flex-row space-x-4 mt-1 m-0">
                    <p className="text-sm m-0">{item.min}</p>
                    <p className="text-sm font-semibold m-0">{item.price}</p>
                  </div>
                </div>
                <div>
                  <button
                    onClick={handleClick}
                    className={`bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 ${
                      selected ? "w-32" : "w-24"
                    } flex items-center justify-center`}
                  >
                    {" "}
                    Select
                    {selected && <span className="mr-2">✔</span>}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-center gap-5">
        <div className="mt-6 px-8 py-3 bg-pink-600 text-white">
          <button>Prev</button>
        </div>
        <div className="mt-6 px-8 py-3 bg-pink-600 text-white">
          <button onClick={onNext}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default AddAnOption;
