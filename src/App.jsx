import React, { useEffect, useState } from "react";
import Search from "./components/Search";
import WeatherData from "./components/WeatherData";
import Header from "./components/Header";
import UnAuthorised from "./components/401";
import NotFound from "./components/404";
import { SpeedInsights } from "@vercel/speed-insights/react";

const App = () => {
  const [data, setdata] = useState({});
  const [showError, setshowError] = useState(0);

  useEffect(() => {
    const storedData = localStorage.getItem("data");
    if (storedData) {
      setdata(JSON.parse(storedData));
    }
  }, []);

  return (
    <div className="h-screen w-full fixed overflow-hidden">
      <header className="bg-[#092137] p-10 w-full flex justify-center items-center gap-10">
        <Header />
        <Search setdata={setdata} setshowError={setshowError} />
      </header>

      <main className="h-[80vh] overflow-auto">
        {showError == 401 ? (
          <UnAuthorised />
        ) : showError == 404 ? (
          <NotFound />
        ) : (
          <WeatherData data={data} />
        )}
      </main>
    </div>
  );
};

export default App;
