import { useCallback, useState } from "react";
import { Home } from "../components/Home";

const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" }
];

export const HomeContainer = () => {
    const [selectValue, setSelectValue] = useState<{
        value: string;
        label: string;
    } | null>(null);

    const handleSelectValue = useCallback(
        (newValue: { value: string; label: string } | null) => {
            setSelectValue(newValue);
        }, []);

    return (
        <Home
            stateName={selectValue?.label}
            options={options}
            onSelectChange={handleSelectValue}
        />
    );
};
