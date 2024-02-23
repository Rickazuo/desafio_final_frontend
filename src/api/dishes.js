import axios from "axios";
import { url } from ".";

export const getAllDishes = async (token) => {
    return axios.get(`${url}/dish/dishes`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
};

export const getDishById = async (token, id) => {
    return axios.get(`${url}/dish/dishes/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
};

export const editDish = async (token, id, data) => {
    return axios.put(`${url}/dish/dishes/${id}`, data, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
};


export const createDish = async (token, data) => {
    return axios.post(`${url}/dish/dishes`, data, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
};



