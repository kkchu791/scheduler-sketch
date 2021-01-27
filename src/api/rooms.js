import axios from 'axios';

export const createRoom = async () => {
  const response = await axios.post(`${process.env.REACT_APP_API_URL}/rooms`);
  return {data: response.data};
};
