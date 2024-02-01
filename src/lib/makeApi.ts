import axios, { AxiosResponse, Method } from "axios";
import { keys } from "./keys";

const apiUrl = "https://magadhorodental.com";

interface RequestOptions {
    method: Method;
    url: string;
    headers?: Record<string, string>;
    data?: any;
}

const makeRequest = async (path = "/", method: Method = "GET", data = {}): Promise<AxiosResponse> => {
    const options: RequestOptions = {
        method,
        url: apiUrl + path,
        headers: {
            Accept: '*/*',
            Authorization: localStorage.getItem(keys.authKey) || '',
            'Content-Type': 'application/json',
        },
        data,
    };

    try {
        const response = await axios.request(options);
        return response;
    } catch (error: any) {
        if (error.response?.status === 401) {
            if (typeof window !== "undefined") {
                localStorage.clear();
                window.location.replace("/admin/login");
            }
        }
        throw error;
    }
};

interface FileUploadInfo {
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    destination: string;
    filename: string;
    path: string;
    size: number;
}


const uploadFileRequest = async (file: File): Promise<FileUploadInfo> => {
    const formData = new FormData();
    formData.append('file', file);

    const options: RequestOptions = {
        method: 'POST',
        url: apiUrl + '/api/upload',
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: localStorage.getItem(keys.authKey) || '',
        },
        data: formData,
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export { makeRequest, uploadFileRequest, apiUrl };
