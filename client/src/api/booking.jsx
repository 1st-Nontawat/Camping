import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const createBooking = async (token, data) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(`${API_URL}/booking`, data, config);
  return response;
};



export const checkOut = async (token, id) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(`${API_URL}/checkout`, { id }, config);
  return response;
};


export const checkOutStatus = async (token, session) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(`${API_URL}/checkout-status`, { session }, config);
  return response;
};
