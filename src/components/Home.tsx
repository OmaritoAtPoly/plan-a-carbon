import { FC } from "react";
import Select from "react-select";
import planaLogo from "../assets/images/plana_logo.svg";
import "../styles/_home.scss";
import { Description } from "../utils/constants";
import { BarChartComponent } from "./charts/BarChartComponent";
import { LinesChartComponent } from "./charts/LinesChartComponent";

interface SelectOption {
  value: string;
  label: string;
}

export interface CarbonIntensityType {
  date?: string;
  emissions?: string;
}

interface HomeProps {
  stateName?: string;
  options: SelectOption[];
  onSelectChange: (newValue: { value: string; label: string } | null) => void;
  chartValues: CarbonIntensityType[];
  loading: boolean;
}

export const Home: FC<HomeProps> = ({ stateName, options, onSelectChange, chartValues }) => (
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
      {chartValues.length > 0 && <BarChartComponent chartValues={chartValues}/>}

      {chartValues.length > 0 && <LinesChartComponent chartValues={chartValues}/>}
    </div>
  </main>
);
