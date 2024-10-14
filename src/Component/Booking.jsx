import React from 'react';
import { packages } from '../Data.jsx';
import { useState } from 'react';
import AddAnOption from './AddAnOption';
const Booking = () => {
  const [showAddAnOption, setShowAddAnOption] = useState(false);

  const onNext = () => {
    setShowAddAnOption(true); 
  };

  if (showAddAnOption) {
    return <AddAnOption />; 
  }

  return (
    <div className="items-center justify-start px-4 md:px-10 lg:px-16 -mt-12">
      <div className="text-center">
        <img
          src="car.png"
          className="w-60 h-60 sm:w-64 sm:h-64 object-contain mx-auto"
          alt="Car"
        />
      </div>
      <div>
        <ul className="flex flex-col sm:flex-row items-center justify-start sm:ml-20 lg:ml-48 mt-5">
          <li>
            <div className="bg-pink-500 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center">
              <span className="text-white text-lg sm:text-2xl">
                <span className="text-2xl sm:text-3xl">2</span>/5
              </span>
            </div>
          </li>
          <li className="flex flex-col ml-4 sm:ml-5">
            <h1 className="font-bold text-lg sm:text-2xl">Wash packages</h1>
            <p className="mt-2 text-sm sm:text-md font-thin">Which wash is best for your vehicle?</p>
          </li>
        </ul>
      </div>
      <div className="mx-auto">
        <ul className="flex flex-wrap justify-start p-5 sm:gap-12 ml-44 mt-8">
          {packages.map((pkg, index) => (
            <li
              key={index}
              className="relative p-6 border border-gray-300 flex flex-col items-center w-60 h-auto min-h-[300px] sm:min-h-[450px]" 
            >
              <h1 className="text-lg font-bold text-black">{pkg.title}</h1>
              <p className="text-xl mt-2">{pkg.price}</p>
              <hr className="w-full my-2 border-t border-pink-700" />
              <h4>{pkg.duration}</h4>
              <hr className="w-full my-2 border-t border-pink-700" />
              <p className={`text-center text-sm ${index === 1 ? 'line-clamp-9' : ''}`}> 
                {pkg.info}
              </p>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <button className="bg-pink-600 text-white px-4 py-2 rounded ">
                  Book Now
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center">
        <div className="mt-6 px-8 py-3 bg-pink-600 text-white">
          <button onClick={onNext}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
