import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { name: "Jan", users: 400 },
  { name: "Feb", users: 300 },
  { name: "Mar", users: 500 },
  {name : "Apr", users: 400 },
  { name: "May", users: 300 },
  { name: "Jun", users: 500 },
];

export default function MyChart() {
  return (
    <LineChart width={400} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="users" stroke="#8884d8" />
    </LineChart>
  );
}