import { FC } from "react";
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { ChartValuesType } from "../../utils/interfaces/interfaces";

export const LinesChartComponent: FC<ChartValuesType> = ({ chartValues }) => (
    <ResponsiveContainer width="100%" height="100%">
        <LineChart
            width={500}
            height={300}
            data={chartValues}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
            }}
        >
            <XAxis dataKey="date" stroke="white" />
            <YAxis dataKey="emissions" stroke="white" />
            <Line type="monotone" dataKey="emissions" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
    </ResponsiveContainer>
);
