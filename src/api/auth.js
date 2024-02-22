import axios from "axios";
import { url } from ".";

export const createNewUser = async (data) => {
    return axios.post(`${url}/auth/register`, data);
};

export const login = async (data) => {
    return axios.post(`${url}/auth/login`, data);
}; 