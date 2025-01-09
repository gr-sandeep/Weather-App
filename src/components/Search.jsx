import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";

const Search = ({ setdata, setshowError }) => {
  const [city, setcity] = useState("Chennai");

  const apikey = import.meta.env.VITE_APP_API_KEY;
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`;

  const getData = async () => {
    const response = await fetch(url);

    if (response.status == 200) {
      const data = await response.json();
      setdata(data);
      localStorage.setItem("data", JSON.stringify(data));
    }
    setshowError(response.status);
    setcity("");
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex items-center w-full gap-3">
      <input
        value={city}
        onChange={(e) => setcity(e.target.value)}
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            getData();
          }
        }}
        className="h-12 w-full md:w-1/2 border-none text-center outline-none rounded-full"
        type="text"
        placeholder="Search City"
      />

      <FiSearch
        onClick={getData}
        className="bg-white cursor-pointer rounded-full h-12 w-12 p-3"
      />
    </div>
  );
};

export default Search;
