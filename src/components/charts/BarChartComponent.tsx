import React, { FC } from "react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { CarbonIntensityType } from "../Home";

interface BarChartType {
    chartValues: CarbonIntensityType[];
}
export const BarChartComponent: FC<BarChartType> = ({ chartValues }) => (
    <ResponsiveContainer width="100%" height="100%">
        <BarChart
            width={500}
            height={300}
            data={chartValues}
        >
            <CartesianGrid strokeDasharray="3 3" stroke="yellow" />
            <XAxis dataKey="date" stroke="white" />
            <YAxis dataKey="emissions" stroke="white" />
            <Bar dataKey="emissions" fill="cyan" />
        </BarChart>
    </ResponsiveContainer>
);
