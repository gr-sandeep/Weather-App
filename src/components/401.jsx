import React from "react";

const UnAuthorised = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <img src="/403.jpg" className="animate-bounce w-3/4 md:w-1/2 lg:w-1/4 mt-5" alt="" />
      <p className="text-base md:text-xl text-red-500 font-semibold">
        Please check your OpenWeatherMap API Key!
      </p>
    </div>
  );
};

export default UnAuthorised;
