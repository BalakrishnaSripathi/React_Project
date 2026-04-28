import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "Jan", users: 100 },
  { month: "Feb", users: 200 },
  { month: "Mar", users: 150 },
  { month: "Apr", users: 300 },
];

export default function AreaGraph() {
  return (
    <AreaChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />

      <Area
        type="monotone"
        dataKey="users"
        stroke="#8884d8"
        fill="#8884d8"
      />
    </AreaChart>
  );
}