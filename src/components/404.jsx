import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center text-center">
    <img src="/404.jpg" className="animate-bounce w-3/4 md:w-1/2 mt-5" alt="" />
    <p className="text-base md:text-xl text-red-500 font-semibold">
      Please check the city entered!
    </p>
  </div>
  );
};

export default NotFound;
