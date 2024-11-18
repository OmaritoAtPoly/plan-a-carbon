import { useEffect } from "react";
import { Home } from "../components/Home";
import { useGetFetchData } from "../utils/fetchers/useGetChartData";

export const HomeContainer = () => {
    const { selectOptions, selectValue, handleSelectValue, handleGetStates, charValues, getCarbonIntensity } = useGetFetchData();

    useEffect(() => {
        if (selectValue?.label === undefined) {
            handleGetStates();
        }

        if (selectValue?.label) {
            getCarbonIntensity();
        }

    }, [getCarbonIntensity, handleGetStates, selectValue?.label]);

    return (
        <Home
            stateName={selectValue?.label}
            options={selectOptions}
            onSelectChange={handleSelectValue}
            chartValues={charValues}
        />
    );
};
