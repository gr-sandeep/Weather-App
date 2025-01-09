import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { IoCheckmarkSharp, IoClose } from "react-icons/io5";

const ApiKey = ({ apiKeyChanged, setapiKeyChanged }) => {
  const [apiInput, setapiInput] = useState("");
  const [editMode, seteditMode] = useState(false);

  const handleApiKey = () => {
    localStorage.setItem("apiKey", apiInput);
    alert("Your API Key entered successfully!");
    setapiKeyChanged(!apiKeyChanged);
    seteditMode(false);
  };

  const apiKey = localStorage.getItem("apiKey");

  return (
    <div className="text-white cursor-pointer flex items-center gap-5">
      {editMode ? (
        <input
          type="password"
          value={apiInput}
          onChange={(e) => setapiInput(e.target.value)}
          className="border-none text-center outline-none text-black rounded-full px-5 h-8"
          placeholder="Paste your API Key here"
        />
      ) : (
        <>
          {apiKey ? (
            <>
              {apiKey.slice(0, 3)}.....{apiKey.slice(-3)}
            </>
          ) : (
            <></>
          )}
        </>
      )}

      {editMode ? (
        <>
          <IoClose
            title="Cancel"
            onClick={() => seteditMode(false)}
            className="text-xl rounded-full bg-red-500 p-0.5"
          />
          <IoCheckmarkSharp
            title="Save"
            onClick={handleApiKey}
            className="text-xl bg-green-500 rounded-full p-0.5"
          />
        </>
      ) : (
        <FiEdit
          title="Edit your OpenWeatherMap API Key"
          onClick={() => seteditMode(true)}
          fontSize={24}
        />
      )}
    </div>
  );
};

export default ApiKey;
