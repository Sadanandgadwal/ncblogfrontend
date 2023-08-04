import React from "react";
import { useState } from "react";
import { css } from "@tailwindcss/core";

const OtpModel = ({ show, onClose }) => {
  const [otp, setOtp] = useState("");

  const handleInputChange = (event) => {
    setOtp(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onClose();
  };

  return (
    <div
      className={css({
        display: show ? "block" : "none",
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 1000,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      })}
    >
      <div className="max-w-md mx-auto py-12 px-16 bg-white shadow-md rounded-md">
        <h1 className="text-xl mb-4 font-bold text-slate-500">Enter OTP</h1>
        <input
          type="text"
          className="bg-white-500 px-7 py-2 ml-2 rounded-md text-md text-blue font-semibold"
          value={otp}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="bg-indigo-500 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold"
          onClick={handleSubmit}
        >
          Ok
        </button>
      </div>
    </div>
  );
};

export default OtpModel;
