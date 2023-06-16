import { useState } from "react";
import "./Location.css";
import SearchComponent from "./Search";
import useFetch from "./customHook/customHook";
import weatherConditionEmojis from "./WeatherConditions";

const Location = () => {
  const [location, setLocation] = useState("HYDERABAD");
  const { fetchedData, isError, isLoading, updateUrl } = useFetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location.toUpperCase()}/today?unitGroup=metric&key=VAN49GX3KM95EQ7H4Q5HPHJWJ&contentType=json`
  );

  const handleLocationChange = (newLocation) => {
    setLocation(newLocation);
    const newUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${newLocation.toUpperCase()}/today?unitGroup=metric&key=VAN49GX3KM95EQ7H4Q5HPHJWJ&contentType=json`;
    updateUrl(newUrl);
  };
  const emoji =
    weatherConditionEmojis[fetchedData?.currentConditions.conditions];

  return (
    <div className="right-component">
      <div className="logo-text">
        <div className="logo">{emoji}</div>
        <h1>{fetchedData?.currentConditions.conditions}</h1>
        <div className="line"></div>
      </div>
      <div className="search">
        <SearchComponent onLocationChange={handleLocationChange} />
      </div>
      <div className="location-data">
        <h1>
          {fetchedData?.address},<span style={{ marginLeft: "2px" }}>IN</span>
        </h1>
        <div className="sidebyside">
          <h2>Temperature</h2>
          <h2>{fetchedData?.currentConditions.temp}℃</h2>
        </div>
        <div className="linelarge"></div>
        <div className="sidebyside">
          <h2>Humidity</h2>
          <h2>{fetchedData?.currentConditions.humidity}%</h2>
        </div>
        <div className="linelarge"></div>
        <div className="sidebyside">
          <h2>Visibility</h2>
          <h2>{fetchedData?.currentConditions.visibility} mi</h2>
        </div>
        <div className="linelarge"></div>
        <div className="sidebyside">
          <h2>Wind Speed</h2>
          <h2>{fetchedData?.currentConditions.windspeed} Km/h</h2>
        </div>
        <div className="linelarge"></div>
      </div>
    </div>
  );
};

export default Location;
