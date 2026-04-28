import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { month: "Jan", users: 100 },
  { month: "Feb", users: 50 },
  { month: "Mar", users: 150 },
  { month: "Apr", users: 90 },
  { month: "May", users: 85 },
  { month: "Jun", users: 200 },
];

export default function LineGraph() {
  return (
    <LineChart width={400} height={300} data={data}>
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Line dataKey="users" stroke="blue" />
    </LineChart>
  );
}