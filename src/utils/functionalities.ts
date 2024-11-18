import { ResponseStateType } from "./interfaces/interfaces";

export const handleClearStateResponse = (value: ResponseStateType) => {
    return value.state.flat().filter(a => a !== "state");
};

export const handleCreateStateCollection = (states: string[]) => {
    const result = states.map(a => (
        {
            value: a,
            label: a
        }));

    return result;
};

export const handleCleanCarbonIntensity = (value: string[]) => {
    return value.map((a) => {
        let formatDate;

        if (a[0] !== undefined) {
            formatDate = new Date(a[0]);
        }

        return {
            date: formatDate?.toLocaleTimeString(),
            emissions: a[1]
        };
    });
};
