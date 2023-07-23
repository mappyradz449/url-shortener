import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LinkHistory from "@/components/LinkHistory";
import Navbar from "@/components/Navbar";
import URLShortener from "@/components/URLShortener";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

function AppContainer() {
  const [currentOriginalLink, setCurrentOriginalLink] = useState("");

  return (
    <div className="min-h-screen text-gray-700 bg-blueGray-500">
      <div className="">
        <Navbar />
        <Header />
        <URLShortener setCurrentOriginalLink={setCurrentOriginalLink} />
      </div>

      <div className="px-2 py-4 mx-8 my-10 rounded-lg shadow-lg md:px-10 md:mx-20 bg-blueGray-400 md: min-w-fit">
        <LinkHistory currentOriginalLink={currentOriginalLink} />
      </div>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default AppContainer;
