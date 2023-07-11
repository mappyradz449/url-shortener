import "./App.css";
import UrlShortener from "./UrlShortener";
import Link from "./Link";
import { useState } from "react";

function App() {
  const [inputVal, setInputVal] = useState("");

  return (
    <div className="bg-teal-500 text-gray-300">
      <UrlShortener setInputVal={setInputVal} />
      <Link inputVal={inputVal} />
    </div>
  );
}

export default App;
