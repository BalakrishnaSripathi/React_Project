import { PieChart, Pie, Tooltip, Legend, Cell } from "recharts";

const data = [
  { month: "Jan", users: 100 },
  { month: "Feb", users: 200 },
  { month: "Mar", users: 150 },
];

// Optional colors
const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

export default function PieGraph() {
  return (
    <PieChart width={400} height={300}>
      <Pie
        data={data}
        dataKey="users"
        nameKey="month"
        cx="50%"
        cy="50%"
        outerRadius={100}
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>

      <Tooltip />
      <Legend />
    </PieChart>
  );
}