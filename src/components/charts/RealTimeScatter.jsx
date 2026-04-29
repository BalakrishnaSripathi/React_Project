import React, { useEffect, useState } from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";

export default function RealTimeScatter() {
  const [data, setData] = useState([]);

  // Fetch real-time data every 5 seconds
  useEffect(() => {
    const fetchData = () => {
      fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then((res) => res.json())
        .then((res) => {
          const price = res.bpi.USD.rate_float;

          setData((prev) => [
            ...prev.slice(-9), // keep last 10 points
            {
              x: prev.length + 1,
              y: price,
            },
          ]);
        });
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: "100%", height: 350 }}>
      <ResponsiveContainer>
        <ScatterChart>
          {/* Gradient */}
          <defs>
            <linearGradient id="colorDot" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00C49F" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#00C49F" stopOpacity={0.2} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis type="number" dataKey="x" name="Time" />
          <YAxis type="number" dataKey="y" name="BTC Price" />

          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Legend />

          <Scatter
            name="Bitcoin Price"
            data={data}
            fill="url(#colorDot)"
            animationDuration={1000}
            animationEasing="ease-in-out"
          />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}