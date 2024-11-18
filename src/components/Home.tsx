import { FC } from "react";
import Select from "react-select";
import planaLogo from "../assets/images/plana_logo.svg";
import "../styles/_home.scss";
import "../styles/app.scss";
import { Description } from "../utils/constants";
import { BarChartComponent } from "./charts/BarChartComponent";
import { LinesChartComponent } from "./charts/LinesChartComponent";
import { CarbonIntensityType, SelectValuesType } from "../utils/interfaces/interfaces";

interface HomeProps {
  stateName?: string;
  options: SelectValuesType[];
  onSelectChange: (newValue: { value: string; label: string } | null) => void;
  chartValues: CarbonIntensityType[];
}

export const Home: FC<HomeProps> = ({ stateName, options, onSelectChange, chartValues }) => (
  <main className='main-container'>
    <div className='main-title'>
      <div className="logo-container">
        <img className="logo" src={planaLogo} alt="Plan A logo" aria-label="Plan A" />
      </div>
      <p className="description">{Description}</p>
    </div>

    <div className="info-text-wrapper">
      <Select options={options} placeholder="Select federal state" onChange={onSelectChange} />
      <h2>Federal State Name: {stateName}</h2>
    </div>
    <div className='charts'>
      {chartValues.length > 0 && <BarChartComponent chartValues={chartValues} />}
      {chartValues.length > 0 && <LinesChartComponent chartValues={chartValues} />}
    </div>
  </main>
);
