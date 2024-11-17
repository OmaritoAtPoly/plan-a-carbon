import { useCallback } from "react";
// import { type AxiosResponse } from "axios";
import { axiosPublic } from "./Interceptors";

export const useGetAllApiCalls = () => {

    const getAllStates = useCallback(async () => {
        let result;

        try {
            const value = (await axiosPublic.get("state"));

            result = value.data;
        } catch (error) {
            if (error instanceof Error) {
                // notifyToaster(error.message, "error");
                console.log(error.message);
            }
        }

        return result;
    }, []);

    const getCarbonIntensity = useCallback(async (state?: string) => {
        let result;

        if (state) {
            try {
                const value = (await axiosPublic.get(`RegionalizedDemandHistorical/?state=${state}&country=DE&start=2022-01-01&end=2022-01-02`));

                result = value.data;
            } catch (error) {
                if (error instanceof Error) {
                    // notifyToaster(error.message, "error");
                    console.log(error.message);
                }
            }
        }

        return result;
    }, []);

    return { getAllStates, getCarbonIntensity };
};
