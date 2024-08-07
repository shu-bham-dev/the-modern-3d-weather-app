import React, { useEffect } from "react";
import { getFormatedData, getWeatherData } from "../services/weatherService";

interface IPropType {
  title: String;
}
const Forecast = ({ title }: IPropType) => {
  useEffect(() => {
    const data = getFormatedData("weather", { q: "varanasi" });
    console.log(data);
  }, []);

  return (
    <div>
      <div className="flex items-center justify-start mt-6">
        <p className="text-white font-medium uppercase">{title}</p>
      </div>
      <hr className="my-2" />
      <div className="flex flex-row items-center justify-between text-white">
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">4:30 PM</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt="weather-app"
            className="w-12 my-1"
          />
          <p className="font-medium">22°</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">4:30 PM</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt="weather-app"
            className="w-12 my-1"
          />
          <p className="font-medium">22°</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">4:30 PM</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt="weather-app"
            className="w-12 my-1"
          />
          <p className="font-medium">22°</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">4:30 PM</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt="weather-app"
            className="w-12 my-1"
          />
          <p className="font-medium">22°</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">4:30 PM</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt="weather-app"
            className="w-12 my-1"
          />
          <p className="font-medium">22°</p>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
