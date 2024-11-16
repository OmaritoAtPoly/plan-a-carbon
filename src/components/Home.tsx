import { FC } from "react";
import Select from "react-select";
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import planaLogo from "../assets/images/plana_logo.svg";
import "../styles/_home.scss";
import { Description } from "../utils/constants";

interface SelectOption {
  value: string;
  label: string;
}
interface HomeProps {
  stateName?: string;
  options: SelectOption[];
  onSelectChange: (newValue: { value: string; label: string } | null) => void;
}
export const Home: FC<HomeProps> = ({ stateName, options, onSelectChange }) => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100
    }
  ];


  return (
    <main className='main-container'>
      <div className='main-title'>
        <div className="logo-container">
          <img src={planaLogo} alt="Plan A logo" aria-label="Plan A" />
        </div>
        <p className="description">{Description}</p>
      </div>

      <div className="info-text-wrapper">
        <Select options={options} placeholder="Select federal state" onChange={onSelectChange} />
        <h2>State Name: {stateName}</h2>
      </div>
      <div className='charts'>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>

      </div>
    </main>
  );
};
