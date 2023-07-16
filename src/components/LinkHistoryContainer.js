import React from "react";

const LinkHistoryContainer = ({ children }) => {
  return (
    <div className="bg-emerald-100 container mt-5 ml-20 mr-32 p-4 rounded-lg shadow-lg overflow-y-auto max-h-96">
      {children}
    </div>
  );
};

export default LinkHistoryContainer;
