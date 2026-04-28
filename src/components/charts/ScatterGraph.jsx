import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { x: 10, y: 30 },
  { x: 20, y: 50 },
  { x: 30, y: 40 },
  { x: 40, y: 70 },
];

export default function ScatterGraph() {
  return (
    <ScatterChart width={400} height={300}>
      <CartesianGrid />
      <XAxis type="number" dataKey="x" name="X Value" />
      <YAxis type="number" dataKey="y" name="Y Value" />
      <Tooltip cursor={{ strokeDasharray: "3 3" }} />

      <Scatter name="Data Points" data={data} fill="red" />
    </ScatterChart>
  );
}