import "./App.css";
import UrlShortener from "./UrlShortener";
import Link from "./Link";
import { useState } from "react";

function App() {
  const [inputVal, setInputVal] = useState("");

  return (
    <div className="bg-teal-500 text-gray-700 min-h-screen">
      <UrlShortener setInputVal={setInputVal} />
      {/* <div className="bg-teal-700 justify-center items-center grid grid-cols-3 grid-auto-fit mt-5 ml-48 mr-48 p-4 rounded-lg shadow-lg">
        <h1 className="text-gray-700 font-sans font-semibold ml-56">
          Original Link
        </h1>
        <h1 className="text-gray-700 font-sans font-semibold ml-48">
          Short Link
        </h1>
        <h1 className="text-gray-700 font-sans font-semibold ml-24">
          Copy Link
        </h1>
      </div> */}

      <div className="bg-emerald-100 container mt-5 ml-20 mr-32 p-4 rounded-lg shadow-lg overflow-y-auto max-h-96">
        {/* <h2
          className={
            inputVal
              ? "invisible"
              : "text-gray-500 font-sans font-semibold flex justify-center"
          }
        >
          No links available
        </h2> */}
        <Link inputVal={inputVal} />
      </div>
    </div>
  );
}

export default App;
