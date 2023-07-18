import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaCopy } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ShortenedLink = ({ url }) => {
  const showToastMsg = () => {
    //alert("copied");
    toast("Link Copied!");
  };

  return (
    <div className="border-2 border-blueGray-500 rounded-lg p-2 flex justify-between mx-3 my-3">
      <p className="text-gray-700 font-sans font-medium break-all flex-nowrap flex-grow">
        {url}
      </p>
      <CopyToClipboard
        text={url}
        onCopy={() => {
          // TODO: Toast here
          showToastMsg();
          console.log("Copied link: ", url);
        }}
      >
        <FaCopy
          className={"fill-blueGray-500 hover:fill-blueGray-600 h-7 mx-1"}
        />
      </CopyToClipboard>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default ShortenedLink;
