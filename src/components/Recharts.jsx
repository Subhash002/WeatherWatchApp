import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const Recharts = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchChartData = async () => {
      const response = await fetch(
        "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/HYDERABAD/next7days?unitGroup=metric&include=days&key=VAN49GX3KM95EQ7H4Q5HPHJWJ&contentType=json"
      );
      const data = await response.json();
      const results = data.days;
      const formattedData = results.map((result) => ({
        date: formatDate(result.datetime),
        temperature: result.temp,
      }));
      setChartData(formattedData);
    };

    fetchChartData();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.getMonth() + 1; // Months are zero-based, so add 1
    const day = date.getDate();
    return `${month}-${day}`;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={600}
        height={800}
        data={chartData}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line
          type="monotone"
          dataKey="temperature"
          stroke="rgba(255, 255, 255, 0.8)"
          strokeWidth={2}
        />
        <CartesianGrid stroke="rgba(255, 255, 255, 0.2)" fill="transparent" />
        <XAxis dataKey="date" tick={{ fill: "white" }} />
        <YAxis tick={{ fill: "white" }} />
        <Tooltip
          contentStyle={{
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            color: "#fff",
          }}
          itemStyle={{ color: "white" }}
          labelStyle={{ color: "white" }}
          formatter={(value) => [`${value}°C`]}
        />
        <Legend />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Recharts;
