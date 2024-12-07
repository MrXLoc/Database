import axios from 'axios';

export const fetchUserData = async () => {
  const response = await axios.get('/api/earnings');
  return response.data;
};