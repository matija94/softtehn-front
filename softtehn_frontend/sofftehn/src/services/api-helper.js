import axios from 'axios';

import apiConfig from './api-configuration';
import {ACCESS_TOKEN} from "../constants";

const initialHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
};

const getAccessToken = () => {
    return localStorage.getItem(ACCESS_TOKEN);
};

export const getHeaders = () => Object.assign({}, initialHeaders, {
    Authorization: `Bearer ${getAccessToken()}`
});

class ApiHelper {

    static get(resourceUrl, params) {
        const url = `${apiConfig.baseUrl}/${resourceUrl}`;
        return axios.get(url, {
            headers: getHeaders(),
            params,
        });
    }

    static post(resourceUrl, data) {
        const url = `${apiConfig.baseUrl}/${resourceUrl}`;
        return axios({
            method: 'post',
            url,
            data,
            headers: getHeaders()
        });
    }

    static put(resourceUrl, data) {
        const url = `${apiConfig.baseUrl}/${resourceUrl}`;
        return axios({
            method: 'put',
            url,
            data,
            headers: getHeaders()
        });
    }

    static remove(resourceUrl) {
        const url = `${apiConfig.baseUrl}/${resourceUrl}`;
        return axios({
            method: 'delete',
            url,
            headers: getHeaders()
        });
    }

}

export default ApiHelper;
