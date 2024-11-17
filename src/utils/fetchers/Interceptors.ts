import axios, { type AxiosResponse, type AxiosError, InternalAxiosRequestConfig } from "axios";

const baseURL = "https://api.co2map.de/";

export const axiosPublic = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json"
    }
});

const onPublicRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    // console.info(`[request] [${JSON.stringify(config)}]`);
    return config;
};

const onRequestError = async (error: AxiosError): Promise<AxiosError> => {
    // console.error(`[request error] [${JSON.stringify(error)}]`);
    return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
    // console.info(`[response] [${JSON.stringify(response)}]`);
    if (response.status >= 200 || response.status <= 299) return response;
    throw new Error(response.statusText);
};

const onResponseError = async (error: AxiosError): Promise<AxiosError> => {
    // console.error(`[response error] [${JSON.stringify(error.isAxiosError)}]`);
    return Promise.reject(error);
};

axiosPublic.interceptors.response.use(onResponse, onResponseError);
axiosPublic.interceptors.request.use(onPublicRequest, onRequestError);
