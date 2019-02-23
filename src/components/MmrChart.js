import React, { Component } from "react";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

const ranks = {
  0: "Unranked",
  1: "Pawn 1",
  2: "Pawn 2",
  3: "Pawn 3",
  4: "Pawn 4",
  5: "Pawn 5",
  6: "Pawn 6",
  7: "Pawn 7",
  8: "Pawn 8",
  9: "Pawn 9",
  10: "Knight 1",
  11: "Knight 2",
  12: "Knight 3",
  13: "Knight 4",
  14: "Knight 5",
  15: "Knight 6",
  16: "Knight 7",
  17: "Knight 8",
  18: "Knight 9",
  19: "Bishop 1",
  20: "Bishop 2",
  21: "Bishop 3",
  22: "Bishop 4",
  23: "Bishop 5",
  24: "Bishop 6",
  25: "Bishop 7",
  26: "Bishop 8",
  27: "Bishop 9",
  28: "Rook 1",
  29: "Rook 2",
  30: "Rook 3",
  31: "Rook 4",
  32: "Rook 5",
  33: "Rook 6",
  34: "Rook 7",
  35: "Rook 8",
  36: "Rook 9",
  37: "King",
  38: "Queen"
};

const rankFormatter = mmrlevel => {
  return ranks[mmrlevel];
};

class MmrChart extends Component {
  render() {
    const { dataPoints } = this.props;

    if (!dataPoints) {
      return null;
    }

    const fixData = dataPoints => {
      for (const point of dataPoints) {
        point.fetchedat = new Date(point.fetchedat).toDateString();
      }
      return dataPoints;
    };

    const data = fixData(dataPoints);

    return (
      <ResponsiveContainer height={500} width={750} className="chart-container">
        <LineChart
          width={400}
          height={400}
          data={data}
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
          <XAxis
            dataKey="fetchedat"
            textAnchor="end"
            tick={{ angle: -70 }}
            height={150}
          />

          <YAxis
            dataKey="mmrlevel"
            domain={["auto", "auto"]}
            allowDecimals={false}
            tickFormatter={rankFormatter}
            width={80}
          />
          <Tooltip
            wrapperStyle={{
              borderColor: "white",
              boxShadow: "2px 2px 3px 0px rgb(204, 204, 204)"
            }}
            formatter={(value, name, props) => {
              return [rankFormatter(value)];
            }}
            contentStyle={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
            labelStyle={{ fontWeight: "bold", color: "#666666" }}
          />
          <Line
            type="monotone"
            dataKey="mmrlevel"
            stroke="#ff7300"
            yAxisId={0}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

export default MmrChart;
