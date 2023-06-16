import "./Graph.css";
import moment from "moment/moment";
import Recharts from "./Recharts";
import { useEffect, useState } from "react";
import useFetch from "./customHook/customHook";

const Graph = () => {
  const url =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/HYDERABAD/today?unitGroup=metric&key=VAN49GX3KM95EQ7H4Q5HPHJWJ&contentType=json";
  const { fetchedData, isError, isLoading } = useFetch(url);
  const [time, setTime] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(moment().format("h:mm:ss a"));
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="left-component">
      <div className="location">
        <h2>{fetchedData?.address}</h2>
        <h2>IN</h2>
      </div>
      <div className="graph">
        <div className="graph-inner">
          <Recharts />
        </div>
      </div>
      <div className="date-temp">
        <div className="date">
          <p style={{ fontSize: "35px" }}>{time}</p>
          <p>{moment().format("dddd, Do MMM YYYY")}</p>
        </div>
        <div className="temp">
          <h1>
            {fetchedData?.currentConditions.temp}°{" "}
            <span style={{ fontSize: "20px" }}>C</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Graph;
