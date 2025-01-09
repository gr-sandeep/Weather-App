import moment from "moment";
import React from "react";
import { CgCompressRight } from "react-icons/cg";
import { FaWind } from "react-icons/fa";
import {
  LiaTemperatureHighSolid,
  LiaTemperatureLowSolid,
} from "react-icons/lia";
import { MdOutlineVisibility } from "react-icons/md";
import {
  TbError404,
  TbSunrise,
  TbSunset,
  TbTemperature,
  TbWorldLatitude,
} from "react-icons/tb";
import { WiHumidity, WiWindDeg } from "react-icons/wi";

const WeatherData = ({ data }) => {
  // Convert the Unix timestamp to a moment object in UTC
  const date = moment.unix(data.dt).utcOffset(data.timezone / 60);
  const sunrise = moment.unix(data?.sys?.sunrise).utcOffset(data.timezone / 60);
  const sunset = moment.unix(data?.sys?.sunset).utcOffset(data.timezone / 60);

  // Format the date and time in a human-readable format
  const formattedDate = date.format("dddd, MMMM DD YYYY");
  const formattedTime = date.format("hh:mm a");
  const formattedSunRiseTime = sunrise.format("hh:mm a");
  const formattedSunSetTime = sunset.format("hh:mm a");

  return (
    <div className="flex items-center justify-center shadow-xl rounded-md mx-5 md:mx-20">
      <div className="flex flex-col items-center justify-center w-full p-5 md:px-10 pb-10">
        {data && data.main && (
          <>
            <div className="w-full flex flex-col-reverse text-center sm:flex-row items-center justify-center md:justify-start gap-0 sm:gap-20 ml-0 md:ml-20">
              <div>
                <img
                  src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                  alt=""
                />
                <p className="text-4xl text-[#ea9d00]">{data?.main.temp}°c</p>
                <p className="text-2xl ">{data?.weather[0].main}</p>
              </div>

              <div>
                <p className="text-3xl text-[#ea9d00]">
                  {data?.name}, {data?.sys.country}
                </p>
                <p>{formattedDate}</p>
                <p>Local Time: {formattedTime} (last updated)</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between w-full gap-0 mt-5 md:gap-40">
              <div className="w-full md:w-1/2">
                <div className="content">
                  <p className="flex items-center gap-2">
                    <TbTemperature fontSize={20} />
                    Feels like
                  </p>
                  <p>{data?.main.feels_like}°c</p>
                </div>
                <hr className="w-full pt-[2px]" />

                <div className="content">
                  <p className="flex items-center gap-2">
                    <LiaTemperatureLowSolid fontSize={20} />
                    Min Temperature
                  </p>
                  <p>{data?.main.temp_min}°c</p>
                </div>
                <hr className="w-full pt-[2px]" />

                <div className="content">
                  <p className="flex items-center gap-2">
                    <LiaTemperatureHighSolid fontSize={20} />
                    Max Temperature
                  </p>
                  <p>{data?.main.temp_max}°c</p>
                </div>
                <hr className="w-full pt-[2px]" />

                <div className="content">
                  <p className="flex items-center gap-2">
                    <CgCompressRight fontSize={18} />
                    Pressure
                  </p>
                  <p>{data?.main.pressure}</p>
                </div>
                <hr className="w-full pt-[2px]" />

                <div className="content">
                  <p className="flex items-center gap-2">
                    <TbWorldLatitude fontSize={20} />
                    Longtitude
                  </p>
                  <p>{data?.coord.lon}</p>
                </div>
                <hr className="w-full pt-[2px]" />

                <div className="content">
                  <p className="flex items-center gap-2">
                    <TbWorldLatitude fontSize={20} />
                    Latitude
                  </p>
                  <p>{data?.coord.lat}</p>
                </div>
                <hr className="w-full pt-[2px]" />
              </div>

              <div className="w-full md:w-1/2">
                <div className="content">
                  <p className="flex items-center gap-2">
                    <TbSunrise fontSize={20} /> Sunrise
                  </p>
                  <p>{formattedSunRiseTime}</p>
                </div>
                <hr className="w-full pt-[2px]" />

                <div className="content">
                  <p className="flex items-center gap-2">
                    <TbSunset fontSize={20} />
                    Sunset
                  </p>
                  <p>{formattedSunSetTime}</p>
                </div>
                <hr className="w-full pt-[2px]" />

                <div className="content">
                  <p className="flex items-center gap-1">
                    <WiHumidity fontSize={24} />
                    Humidity
                  </p>
                  <p>{data?.main.humidity}%</p>
                </div>
                <hr className="w-full pt-[2px]" />

                <div className="content">
                  <p className="flex items-center gap-2">
                    <FaWind fontSize={15} /> Wind Speed
                  </p>
                  <p>{data?.wind.speed} kmph</p>
                </div>
                <hr className="w-full pt-[2px]" />

                <div className="content">
                  <p className="flex items-center gap-2">
                    <WiWindDeg fontSize={20} />
                    Wind Degree
                  </p>
                  <p>{data?.wind.deg}°</p>
                </div>
                <hr className="w-full pt-[2px]" />

                <div className="content">
                  <p className="flex items-center gap-2">
                    <MdOutlineVisibility fontSize={20} />
                    Visibility
                  </p>
                  <p>{data?.visibility / 1000} km</p>
                </div>
                <hr className="w-full pt-[2px]" />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default WeatherData;
