import Axios, {AxiosResponse} from 'axios';
import {IMethod} from "../types";

class ApiService{
    private baseUrl = 'https://api.ac-room.cc';

    private async api(method: IMethod, url: string, data: any, params: any) {
        let result: AxiosResponse;

        try {
            result = await Axios.request(
                {url, method, data: data, params, baseURL: this.baseUrl});
        } catch (err) {
            throw new Error(`網絡錯誤: ${err.message}`);
        }
        return result.data;
    }

    public async apiGet(path: string, params: any) {
        return this.api("GET", path, {}, params);
    }

    public async apiPost(path: string, data: any, params: any = {}) {
        return this.api("POST", path, data, params);
    }
}

export const apiService = new ApiService();
