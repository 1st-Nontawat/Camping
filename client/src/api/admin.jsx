import axios from "axios";


const API_URL = "http://localhost:5000/api";


export const listStats = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(`${API_URL}/stats`,  config);
  return response;
};

export const listReservations = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(`${API_URL}/reservations`, config);
  return response;
};

export const listAllReservations = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(`${API_URL}/all-reservations`, config);
  return response;
};

export const listMyCampings = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(`${API_URL}/my-campings`, config);
  return response;
};