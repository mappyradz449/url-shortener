import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LinkHistory from "@/components/LinkHistory";
import Navbar from "@/components/Navbar";
import URLShortener from "@/components/URLShortener";
import { useState } from "react";

function AppContainer() {
  const [currentOriginalLink, setCurrentOriginalLink] = useState("");

  return (
    <div className="text-gray-700 bg-blueGray-500 min-h-screen justify-between">
      <div className="">
        <Navbar />
        <Header />
        <URLShortener setCurrentOriginalLink={setCurrentOriginalLink} />
      </div>

      <div className="bg-blueGray-400 mt-10 mx-20 px-20 rounded-lg shadow-lg py-4 max-w-full md: min-w-fit">
        <LinkHistory currentOriginalLink={currentOriginalLink} />
      </div>
      <Footer />
    </div>
  );
}

export default AppContainer;
