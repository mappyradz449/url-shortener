import React, { useEffect, useState, useRef } from "react";

const UrlShortener = ({ setInputVal }) => {
  const [val, setVal] = useState("");
  const inputRef = useRef();

  //**** This won't work as its a react project ****/

  //   const input = document.getElementById("myInput");

  //   input.addEventListener("keypress", function (event) {
  //     if (event.key === "Enter") {
  //       event.preventDefault();
  //       document.getElementById("submitButton").onClick();
  //     }
  //   });

  const handleClick = () => {
    //console.log(val)
    //localStorage.setItem("inputVal", val);

    setInputVal(val);
    setVal("");
  };

  return (
    <div>
      <h1 className="text-3xl uppercase font-semibold tracking-widest flex justify-center py-9">
        Shortening your URL!
      </h1>
      <hr className="w-48 h-1 mx-auto border-2 rounded" />
      <form
        className="flex justify-center m-4"
        onSubmit={(e) => {
          e.preventDefault();
          handleClick();
        }}
      >
        <div className="border-none border-4">
          <input
            className="bg-teal-100 px-9 py-1 rounded-xl m-1 font-sans font-semibold border-teal-600 border-b-2"
            // ref={inputRef}
            type="text"
            placeholder="Enter URL...."
            value={val}
            id="myInput"
            onChange={(e) => setVal(e.target.value)}
          />
        </div>
        <button
          className="bg-teal-600 hover:bg-teal-400 px-9 py-1 rounded-xl ml-2 font-medium font-sans"
          type="submit"
          id="submitButton"
          onClick={handleClick}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UrlShortener;
