import { useCallback, useState } from "react";
import { CarbonIntensityType, ResponseCarbonIntensityType, ResponseStateType, SelectValuesType } from "../interfaces/interfaces";
import { useGetAllApiCalls } from "./useGetAllApiCalls";
import { handleCleanCarbonIntensity, handleClearStateResponse, handleCreateStateCollection } from "../functionalities";

export const useGetFetchData = () => {
    const [charValues, setCharValues] = useState<CarbonIntensityType[]>([]);
    const [selectValue, setSelectValue] = useState<SelectValuesType | null>(null);
    const [selectOptions, setSelectOptions] = useState<SelectValuesType[]>([]);

    const { getFetchCarbonIntensity, getAllStates } = useGetAllApiCalls();

    const handleSelectValue = useCallback(
        (newValue: { value: string; label: string } | null) => {
            setSelectValue(newValue);
        }, []);

    const handleGetStates = useCallback(async () => {
        const value: ResponseStateType = await (getAllStates());
        const result = handleClearStateResponse(value);
        const stateOptions = handleCreateStateCollection(result);

        setSelectOptions(stateOptions);
    }, [getAllStates]);

    const getCarbonIntensity = useCallback(async () => {
        const value: ResponseCarbonIntensityType = await getFetchCarbonIntensity(selectValue?.label);
        let cleanedValues = undefined;

        if (value) {
            cleanedValues = handleCleanCarbonIntensity(value["Demand (historical)"]);
            setCharValues(cleanedValues);
            return;
        }
        return;

    }, [getFetchCarbonIntensity, selectValue?.label]);

    return { getCarbonIntensity, handleSelectValue, selectValue, handleGetStates, selectOptions, charValues };
};
