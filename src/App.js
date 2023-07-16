import "./App.css";
import LinkHistory from "./components/LinkHistory";
import URLShortener from "./components/URLShortener";
import { useState } from "react";

function App() {
  const [currentOriginalLink, setCurrentOriginalLink] = useState("");

  return (
    <div className="bg-teal-500 text-gray-700 min-h-screen">
      <URLShortener setCurrentOriginalLink={setCurrentOriginalLink} />
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
        <LinkHistory currentOriginalLink={currentOriginalLink} />
      </div>
    </div>
  );
}

export default App;
