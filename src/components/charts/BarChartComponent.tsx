import { FC } from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { ChartValuesType } from "../../utils/interfaces/interfaces";

export const BarChartComponent: FC<ChartValuesType> = ({ chartValues }) => (
    <ResponsiveContainer width="100%" height="100%">
        <BarChart
            width={500}
            height={300}
            data={chartValues}
        >
            <XAxis dataKey="date" stroke="white" />
            <YAxis dataKey="emissions" stroke="white" />
            <Bar dataKey="emissions" fill="cyan" />
        </BarChart>
    </ResponsiveContainer>
);
