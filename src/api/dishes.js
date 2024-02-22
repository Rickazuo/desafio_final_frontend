import axios from "axios";
import { url } from ".";

export const getAllDishes = async (data) => {
    return axios.get(`${url}/dish/dishes`, {...data});
};

export const getDishById = async (data) => {
    return axios.get(`${url}/dish/dishes/:id`, {...data});
};

