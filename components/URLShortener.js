import React, { useState } from "react";
import { BiLink } from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const URLShortener = ({ setCurrentOriginalLink }) => {
  const [val, setVal] = useState("");

  const handleClick = () => {
    setCurrentOriginalLink(val);
    setVal("");
  };

  return (
    <div className="flex mx-auto justify-center bg-blueGray-400 w-3/3 rounded-xl h-15 mt-8 max-w-lg">
      <form
        className="flex justify-center m-3"
        onSubmit={(e) => {
          e.preventDefault();
          handleClick();
        }}
      >
        <div className="flex px-4 items-center relative text-blueGray-500">
          <BiLink className="w-7 h-7 absolute ml-3" />
          <input
            className="bg-blueGray-200  px-10 py-2 rounded-xl font-sans font-semibold  text-blueGray-500"
            // ref={inputRef}
            type="text"
            placeholder="Enter URL here...."
            value={val}
            id="myInput"
            onChange={(e) => setVal(e.target.value)}
          />
        </div>
        <button
          className="bg-blueGray-200 hover:bg-blueGray-500 hover:text-blueGray-100 px-10 py-2 rounded-xl ml-2 font-medium font-sans text-blueGray-500"
          type="submit"
          id="submitButton"
          onClick={handleClick}
        >
          Shorten
        </button>
      </form>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default URLShortener;
