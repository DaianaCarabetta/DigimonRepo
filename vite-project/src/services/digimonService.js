import axios from "axios";

const URL = "https://digi-api.com/api/v1/digimon";
const apiService = axios.create({ URL });

export const getDigimon = async (name) => {
  try {
    const response = await apiService.get(`${URL}/${name}`);
    debugger;
    return response.data;
  } catch (error) {
    console.error("Error fetching data", error);
    throw error;
  }
};

export const getDigimons = async (params) => {
  try {
    const response = await apiService.get(URL, params);

    return response.data.content;
  } catch (error) {
    console.error("Error fetching data", error);
    throw error;
  }
};
