import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const createCamping = async (data, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(`${API_URL}/camping`, data, config);
  return response;
};


export const listCamping = async () => {
 
  const response = await axios.get(`${API_URL}/camping`);
  return response;
};



export const readCamping = async (id) => {
  const response = await axios.get(`${API_URL}/camping/${id}`);
  return response;
}