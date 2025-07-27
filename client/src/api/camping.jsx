import axios from 'axios';

const createCamping = async (data, token) => {
    return await axios.post("http://localhost:5000/api/camping", data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
}

export default createCamping;