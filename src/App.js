import "./App.css";
import UrlShortener from "./UrlShortener";
import Link from "./Link";
import { useState } from "react";

function App() {
  const [inputVal, setInputVal] = useState("");

  return (
    <div className="bg-teal-500 text-gray-700 min-h-screen">
      <UrlShortener setInputVal={setInputVal} />
      <div className="bg-emerald-100 m-12 p-4 rounded shadow-lg container mx-auto">
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
