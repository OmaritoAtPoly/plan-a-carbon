export interface ResponseCarbonIntensityType {
    state: string;
    start: string;
    end: string;
    unit: string;
    country: string;
    "Demand (historical)": string[];
}

export interface SelectValuesType {
    value: string;
    label: string;
}

export interface ResponseStateType {
    state: [string, string];
}

export interface CarbonIntensityType {
    date?: string;
    emissions?: string;
}

export interface ChartValuesType {
    chartValues: CarbonIntensityType[];
}
