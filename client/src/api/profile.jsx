import axios from 'axios';

const createProfile = async (data, token) => {
    console.log("Creating profile...");
    return await axios.post("http://localhost:5000/api/profile", data, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
}

export default createProfile;