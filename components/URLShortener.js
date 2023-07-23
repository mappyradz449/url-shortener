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
    <div className="flex justify-center px-2 mx-auto mt-8 max-w-fit bg-blueGray-400 w-3/3 rounded-xl h-15">
      <form
        className="flex flex-col justify-center m-3 md:flex-row"
        onSubmit={(e) => {
          e.preventDefault();
          handleClick();
        }}
      >
        <div className="relative flex items-center mx-2 my-2 text-blueGray-500">
          <BiLink className="absolute ml-3 w-7 h-7" />
          <input
            className="px-10 py-2 font-sans font-semibold bg-blueGray-200 rounded-xl text-blueGray-500"
            // ref={inputRef}
            type="text"
            placeholder="Enter URL here...."
            value={val}
            id="myInput"
            onChange={(e) => setVal(e.target.value)}
          />
        </div>
        <button
          className="px-10 py-2 mx-2 my-2 font-sans font-semibold duration-150 bg-blueGray-200 hover:bg-blueGray-500 hover:text-blueGray-100 rounded-xl text-blueGray-500 active:scale-95 ease"
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
