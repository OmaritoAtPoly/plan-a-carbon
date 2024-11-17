import { useCallback, useEffect, useState } from "react";
import { Home, CarbonIntensityType } from "../components/Home";
import { useGetAllApiCalls } from "../utils/fetchers/useGetAllApiCalls";
interface ResponseStateType {
    state: [string, string];
}

interface ResponseCarbonIntensityType {
    state: string;
    start: string;
    end: string;
    unit: string;
    country: string;
    "Demand (historical)": string[];
}

interface SelectValuesType {
    value: string;
    label: string;
}
export const HomeContainer = () => {

    const [selectValue, setSelectValue] = useState<SelectValuesType | null>(null);
    const [selectOptions, setSelectOptions] = useState<SelectValuesType[]>([]);
    const [charValues, setCharValues] = useState<CarbonIntensityType[]>([]);

    const { getAllStates, getCarbonIntensity } = useGetAllApiCalls();

    const handleSelectValue = useCallback(
        (newValue: { value: string; label: string } | null) => {
            setSelectValue(newValue);
        }, []);


    const handleClearStateResponse = useCallback((value: ResponseStateType) => {
        return value.state.flat().filter(a => a !== "state");
    }, []);

    const handleCreateStateCollection = useCallback((states: string[]) => {
        const result = states.map(a => (
            {
                value: a,
                label: a
            }));

        return result;
    }, []);

    const handleGetStates = useCallback(async () => {
        const value: ResponseStateType = await (getAllStates());
        const result = handleClearStateResponse(value);
        const stateOptions = handleCreateStateCollection(result);

        setSelectOptions(stateOptions);
    }, [getAllStates, handleCreateStateCollection, handleClearStateResponse]);

    const handleCleanCarbonIntensity = useCallback((value: string[]) => {
        return value.map(a => (
            {
                date: a[0],
                emissions: a[1]
            }
        ));
    }, []);

    const getCarbon = useCallback(async () => {
        const value: ResponseCarbonIntensityType = await getCarbonIntensity(selectValue?.label);
        let cleanedValues = undefined;

        if (value) {
           cleanedValues = handleCleanCarbonIntensity(value["Demand (historical)"]);
            setCharValues(cleanedValues);
            return;
        }
        return;

    }, [getCarbonIntensity, handleCleanCarbonIntensity, selectValue?.label]);

    useEffect(() => {
        handleGetStates();
        getCarbon();

    }, [getCarbon, handleGetStates]);

    return (
        <Home
            stateName={selectValue?.label}
            options={selectOptions}
            onSelectChange={handleSelectValue}
            chartValues={charValues}
            loading={false}
        />
    );
};
