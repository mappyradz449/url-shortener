import React, { useEffect, useState, useRef } from "react";

const UrlShortener = ({ setInputVal }) => {
  const [val, setVal] = useState("");
  //   const inputRef = useRef();

  //   useEffect(() => {
  //     inputRef.current.addEventListener("myInput", function (event) {
  //       if (event.key === "Enter") {
  //         event.preventDefault();
  //         document.getElementById("submitButton").onClick();
  //       }
  //     });
  //   }, []);

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
      <input
        type="text"
        placeholder="Enter URL...."
        value={val}
        id="myInput"
        onChange={(e) => setVal(e.target.value)}
      />
      <button id="submitButton" onClick={handleClick}>
        Submit
      </button>
    </div>
  );
};

export default UrlShortener;
