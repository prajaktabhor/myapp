import React from "react";
import logo from "../assests/main.png";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import { Menu, MenuItem } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import QuestionMarkOutlinedIcon from "@mui/icons-material/QuestionMarkOutlined";
import { useState, useRef } from "react";

const BookingSummary = () => {
  const [showInput, setShowInput] = useState(false);
  const inputRef = useRef(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [paymentType, setPaymentType] = useState("Cash");
  const open = Boolean(anchorEl);

  const handleClick = () => {
    setShowInput(true);

    setTimeout(() => {
      inputRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
    }, 100);
  };

  const handleClick1 = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (type) => {
    setPaymentType(type);
    setAnchorEl(null);
  };

  return (
    <div className="items-center justify-start px-4 md:px-10 lg:px-16 -mt-12 mb-10">
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
              <span className="text-2xl sm:text-3xl">5</span>/5
            </span>
          </div>
        </li>
        <li className="flex flex-col ml-4 sm:ml-5">
          <h1 className="font-bold text-lg sm:text-2xl">Booking summary</h1>
          <p className="mt-2 text-sm sm:text-md font-thin">
            Please provide us with your contact information.
          </p>
        </li>
      </ul>

      <div className=" justify-start items-center mt-10  hidden">
        <ul className="flex flex-wrap gap-4  w-full max-w-4xl  ml-48">
          <li className="sm:w-[calc(50%-0.5rem)] h-32 flex justify-between items-center border p-4">
            <CalendarMonthOutlinedIcon className="text-blue-500" />

            <div className="flex items-center">
              <div className="flex flex-col items-end mr-2">
                <QuestionMarkOutlinedIcon className="text-blue-500" />
                <h3 className="text-base font-bold">Your Appointment Date</h3>
              </div>
            </div>
          </li>
          <li className="sm:w-[calc(50%-0.5rem)] h-32 flex justify-between items-center border p-4">
            <AccessTimeOutlinedIcon className="text-blue-500" />

            <div className="flex items-center">
              <div className="flex flex-col items-end mr-2">
                <QuestionMarkOutlinedIcon className="text-blue-500" />
                <h3 className="text-base font-bold"> Your Appointment Time</h3>
              </div>
            </div>
          </li>
          <li className="sm:w-[calc(50%-0.5rem)] h-32 flex justify-between items-center border p-4">
            <TimerOutlinedIcon className="text-blue-500" />

            <div className="flex items-center">
              <div className="flex flex-col items-end mr-2">
                <h1 className="text-blue-500">0 h 45 min</h1>
                <h3 className="text-base font-bold">Duration</h3>
              </div>
            </div>
          </li>
          <li className="sm:w-[calc(50%-0.5rem)] h-32 flex justify-between items-center border p-4">
            <CalendarMonthOutlinedIcon className="text-blue-500" />

            <div className="flex items-center">
              <div className="flex flex-col items-end mr-2">
                <h1 className="text-blue-500"> 199.00 ₹ </h1>
                <h3 className="text-base font-bold">Total Price</h3>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div className="p-4 justify-center flex">
        <a
          href="#"
          onClick={handleClick}
          className="text-blue-500 underline justify-center mt-6 mr-10"
        >
          Do you have a coupon code ?
        </a>

        {showInput && (
          <div
            ref={inputRef}
            className="mt-6 flex space-x-2 transition-all duration-500"
          >
            <input
              type="text"
              className="border p-2 w-60 rounded-2xl border-gray-300"
            />
            <button className="bg-pink-700 text-white px-4 py-2 rounded ">
              Apply
            </button>
          </div>
        )}
      </div>

      

      <p className="mt-6 text-center text-gray-700 text-sm">
        We will confirm your appointment with you by phone or e-mail within 30
        minutes of receiving your request.
      </p>

      <div className="mt-6   flex justify-center ">
        <button className="bg-pink-600 text-white py-3 px-10 rounded-full w-full sm:w-auto max-w-xs shadow-lg justify-center">
          Confirm Booking
        </button>
      </div>

      <div className="mt-6   flex justify-center ">
        <button className="bg-pink-600 text-white py-3 px-10 justify-center ">
          Prev
        </button>
      </div>
    </div>
  );
};

export default BookingSummary;
