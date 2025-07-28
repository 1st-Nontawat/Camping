import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const uploadImage = async (form, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(`${API_URL}/images`, { image: form }, config);
  return response;
};


