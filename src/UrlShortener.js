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
    <div className="inputContainer">
      <h1>URL Shortener</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleClick();
        }}
      >
        <input
          // ref={inputRef}
          type="text"
          placeholder="Enter URL...."
          value={val}
          id="myInput"
          onChange={(e) => setVal(e.target.value)}
        />
        <button type="submit" id="submitButton" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default UrlShortener;
