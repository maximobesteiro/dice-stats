import React from "react";
import { useTheme } from "@material-ui/core/styles";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Label,
  ResponsiveContainer,
} from "recharts";

interface SpecificDiceThrowProps {
  throws: number[];
  dice: number;
}

const SpecificDiceThrowChart = (props: SpecificDiceThrowProps) => {
  const theme = useTheme();

  if (props.dice < 2) {
    return <></>;
  }

  const buildData = () => {
    let count = 0;
    return props.throws.map((num: number, index: number) => {
      return {
        turn: index + 1,
        count: num === props.dice ? ++count : count,
      };
    });
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        width={450}
        height={300}
        data={buildData()}
        margin={{
          top: 10,
          right: 40,
          left: 0,
          bottom: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="turn">
          <Label value="Turns" offset={-5} position="insideBottom" />
        </XAxis>
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="count"
          stroke={theme.palette.secondary.main}
          fill={theme.palette.secondary.main}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default SpecificDiceThrowChart;
